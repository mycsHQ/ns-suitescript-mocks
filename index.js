'use strict';

var def = require('./nsobjects/define');


module.exports = (config, pathGlobal) => {
    console.log('### Initialise Jest - Build mocks for netsuite ###');
    let nlobjError = function (message) {
        Error.call(this, message);
        this.message = message;
        this.name = this.constructor.name;
        this.getCode = () => this.message;
        this.getDetails = () => this.message;
    };
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    global.nlobjError = nlobjError;
    const record = require('./nsobjects/record.jsx');
    const searchFilter = require('./nsobjects/search-filter.jsx');
    const searchColumn = require('./nsobjects/search-column.jsx');
    const _ = require('lodash');
    const moment = require('moment');
    const file = require('./nsobjects/fileModule');

    const showLogs = false;
    const log = require('./nsobjects/logModule.jsx');
    window.alert = (msg) => {
        console.log(msg);
    };
    window.confirm = (msg) => random(0, 1);

    /*
     * Export netsuite objects as global variables
     */
    global.nlapiSearchRecord = (recordName, searchId, filter, columns) => [record(recordName, (columns && Array.isArray(columns) ? columns : []).reduce((reducer, column) => {
        reducer[column.name] = column.name;
        return reducer;
    }, {}))];
    global.nlapiGetNewRecord = () => new record('test', { tranid: random(1, 100).toString() });
    global.nlobjSearchFilter = searchFilter;
    global.nlobjSearchColumn = searchColumn;
    global.nlapiCreateRecord = (recordName, defaultValues) => new record(recordName, defaultValues);
    global.nlapiLoadRecord = (recordName, id, defaultValues = {}) => {
        defaultValues.id = id;
        return new record(recordName, defaultValues);
    };
    global.nlapiSubmitField = (recordName, id, fields, values) => new record(recordName, { id, fields, values });
    global.nlapiLookupField = () => random(1, 1000);
    global.nlapiSubmitRecord = recordObject => recordObject.getId();
    global.nlapiDeleteRecord = (recordName, id) => id;
    global.nlapiResolveURL = () => 'https://system.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=1&deploy=1';
    global.nlapiGetRecordId = () => random(1, 100);
    global.nlapiGetRecordType = () => random(1, 100);
    global.nlapiScheduleScript = () => 'QUEUED';
    global.nlapiInitiateWorkflow = () => random(1, 100);
    global.nlapiTriggerWorkflow = () => random(1, 100);
    global.nlapiGetContext = () => ({
        getScriptId: () => random(1, 100).toString(),
        getEnvironment: () => 'PRODUCTION',
        getRemainingUsage: () => random(0, 10000).toString(),
    });
    global.nlapiGetFieldValue = (fieldName) => {
        switch (fieldName) {
            case 'custbody_mycs_pick_ticket_printed':
                return 'T';
            case 'subsidiary':
                return random(1, 9);
            default:
                return fieldName;
        }
    };
    global.nlapiSetFieldValue = (field, value) => random(0, 50);
    global.nlapiGetLineItemCount = () => random(0, 50);
    global.nlapiGetCurrentLineItemValue = (sublist, field) => random(0, 50);
    global.nlapiGetCurrentLineItemText = (sublist, field) => random(0, 50);
    global.nlapiDateToString = (dateObj) => dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString;
    global.nlapiStringToDate = (dateString) => new Date(dateString);
    global.nlapiSendEmail = (author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo) => {
        const obj = { author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo };
        nlapiLogExecution('Debug', 'email:', JSON.stringify(obj, null, 2));
    };
    global.nlapiLoadFile = fileId => file.create({ id: `${fileId}.pdf`, fileType: 'PDF', contents: Math.ceil(Math.random() * 100).toString() });
    global.nlapiXMLToPDF = fileContent => file.create({ id: 'test.pdf', fileType: 'PDF', contents: fileContent });
    global.nlapiEscapeXML = (input) => encodeURI(input);
    global.nlapiLogExecution = (a, b, c) => {
        showLogs ? console.log(`Type:${JSON.stringify(a)} Title:${JSON.stringify(b)} Value: `, JSON.stringify(c)) : '';
    };
    global.getGELlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
    global.generateDHLlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
    global.generateGEODISlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
    global.generateRHENUSlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
    global.generateMYCSlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
    global.generateDSTlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
    global._ = _;
    global.log = log;
    global.nlapiAddDays = (dateObject, days) => moment(dateObject)
        .add(days, 'days')
        .toDate();
    global.nlapiAddMonths = (dateObject, months) => moment(dateObject)
        .add(months, 'months')
        .toDate();
    global.nlapiDateToString = (dateObject, format) => dateObject.toLocaleDateString();
    global.setWindowChanged = (a, b) => (a.isChanged = b);
    global.save_record = () => true;
    global.random = random;
    global.getSettings = (name) => (
        {
            name: name,
            username: 'sample_username',
            password: 'sample_password',
            url: 'sample_rul', id: 1,
            host: 'sample_host',
            customData: 'sample_customData',
            isProduction: 'false'
        });
    window.main_form = { submit: () => true };
    window.open = url => console.log('window.open => ' + url);

    var defineResult = def(config);
    return {define: defineResult.define, nsMockups: defineResult.nsMockups, updateModules: defineResult.updateModules}
}