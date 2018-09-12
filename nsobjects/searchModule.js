const _ = require('lodash');

/**
 * Return a Netsuite Search Module
 *
 * @classDescription Search object
 * @constructor
 * @returns {N/Module}
 */

/**
 * NetSuite new column
 * @param {*} options
 * @returns {string}
 */
function createColumn(options) {
  return `${options.name}${options.join ? `__${options.join}` : ''}`;
}

/**
 * NetSuite new filter
 * @param {*} options
 * @returns {string}
 */
function createFilter(options) { // eslint-disable-line no-unused-vars
  return `${options.name}${options.join ? `__${options.join}` : ''}`;
}
/**
 * Return NetSuite ResultSet type.
 * @returns {object} resultset
 */
function ResultSet() {
  const privateColumns = this.columns;
  const times = this.type === 'customrecord_mycs_script_settings' ? 1 : Math.floor(Math.random() * 99) + 1;
  const mockupData = _.map(_.times(times), item => ({
    id: item + 1,
    type: this.type,
    columns: privateColumns.map(columnName => ({ name: columnName })),
    getValue(column) {
      const hardcodedValues = {
        custrecord_mycs_ship_meth_is_assembly: false,
        custrecord_mycs_ship_meth_sel_method: 10,
        custrecord_mycs_ship_meth_config_coll_wg: random(1, 30),
        custrecord_mycs_ship_meth_max_colli_l: random(1, 30),
        custrecord_mycs_ship_meth_max_colli_w: random(1, 30),
        custrecord_mycs_ship_meth_max_colli_h: random(1, 30),
        custrecord_mycs_ship_meth_max_order_val: random(1, 30),
        custrecord_mycs_ship_meth_max_order_wgh: random(1, 30),
        custrecord_mycs_ship_meth_max_colli_cnt: random(1, 30),
        custrecord_mycs_url: '',
      };
      const privateData = _.reduce(
        privateColumns,
        (result, columnName) => {
          const columnNameText = columnName.name || columnName;
          const singleResult = result;
          singleResult[columnNameText] = Object.prototype.hasOwnProperty.call(hardcodedValues, columnNameText)
            ? hardcodedValues[columnNameText] : `${columnNameText}_${item + 1}`;
          singleResult.internalid = random(1, 9000);
          return result;
        },
        {},
      );
      if (typeof column === 'string') {
        return privateData[column];
      } if (typeof column === 'object') {
        const privateColumn = createColumn(column);
        return privateData[privateColumn];
      }
      return '';
    },
    getText(column) {
      const privateData = _.reduce(
        privateColumns,
        (result, columnName) => {
          const singleResult = result;
          singleResult[columnName] = `columnName_${item + 1}`;
          singleResult.internalid = random(1, 9000);
          return result;
        },
        {},
      );
      if (typeof column === 'string') {
        return privateData[column];
      } if (typeof column === 'object') {
        const privateColumn = createColumn(column);
        return privateData[privateColumn];
      }
      return '';
    },
  }));
  const each = callback => _.each(mockupData, (item, index) => callback.call(null, item, index));
  const getRange = (options) => {
    const privateOptions = {};
    privateOptions.start = options.start || 0;
    privateOptions.end = options.end || 0;
    return mockupData.slice(privateOptions.start, privateOptions.end);
  };

  return {
    each,
    getRange,
  };
}

/**
 * NetSuite - constructor of search module.
 * @param {*} options_
 * @returns {*}
 */
function create(options_) {
  const privateId = Math.ceil(Math.random() * 100);
  const privateOptions = {};
  const options = options_ || {};
  privateOptions.type = options.type;
  if (!privateOptions.type) {
    throw new { message: 'SSS_MISSING_REQD_ARGUMENT: type' }();
  }
  privateOptions.filters = options.filters;
  privateOptions.filterExpression = options.filterExpression;
  privateOptions.columns = options.columns;
  privateOptions.title = options.title;
  privateOptions.id = options.id;
  privateOptions.isPublic = options.isPublic;

  const save = () => privateId;
  const run = () => ResultSet.apply(privateOptions);

  return {
    save,
    run,
    type: privateOptions.type,
    filters: privateOptions.filters,
    filterExpression: privateOptions.filterExpression,
    columns: privateOptions.columns,
    title: privateOptions.title,
    id: privateOptions.id,
    isPublic: privateOptions.isPublic,
  };
}
module.exports = {

  create: options => create(options),
  createColumn: options => createColumn(options),
  lookupFields: (options) => {
    const result = {};
    options.columns.map((item, index) => {
      result[item] = [{ value: index, text: item }];
      return true;
    });
    return result;
  },
  Type: {
    ACCOUNT: 'account',
    ACCOUNTING_BOOK: 'accountingbook',
    ACCOUNTING_CONTEXT: 'accountingcontext',
    ACCOUNTING_PERIOD: 'accountingperiod',
    ADV_INTER_COMPANY_JOURNAL_ENTRY: 'advintercompanyjournalentry',
    ALLOCATION_SCHEDULE: 'allocationschedule',
    AMORTIZATION_SCHEDULE: 'amortizationschedule',
    AMORTIZATION_TEMPLATE: 'amortizationtemplate',
    ASSEMBLY_BUILD: 'assemblybuild',
    ASSEMBLY_ITEM: 'assemblyitem',
    ASSEMBLY_UNBUILD: 'assemblyunbuild',
    BILLING_ACCOUNT: 'billingaccount',
    BILLING_CLASS: 'billingclass',
    BILLING_RATE_CARD: 'billingratecard',
    BILLING_REVENUE_EVENT: 'billingrevenueevent',
    BILLING_SCHEDULE: 'billingschedule',
    BIN: 'bin',
    BIN_TRANSFER: 'bintransfer',
    BIN_WORKSHEET: 'binworksheet',
    BLANKET_PURCHASE_ORDER: 'blanketpurchaseorder',
    BOM: 'bom',
    BOM_REVISION: 'bomrevision',
    BULK_OWNERSHIP_TRANSFER: 'bulkownershiptransfer',
    BUNDLE_INSTALLATION_SCRIPT: 'bundleinstallationscript',
    CALENDAR_EVENT: 'calendarevent',
    CAMPAIGN: 'campaign',
    CAMPAIGN_RESPONSE: 'campaignresponse',
    CAMPAIGN_TEMPLATE: 'campaigntemplate',
    CASH_REFUND: 'cashrefund',
    CASH_SALE: 'cashsale',
    CHARGE: 'charge',
    CHARGE_RULE: 'chargerule',
    CHECK: 'check',
    CLASSIFICATION: 'classification',
    CLIENT_SCRIPT: 'clientscript',
    CMS_CONTENT: 'cmscontent',
    CMS_CONTENT_TYPE: 'cmscontenttype',
    COMMERCE_CATEGORY: 'commercecategory',
    COMPETITOR: 'competitor',
    CONSOLIDATED_EXCHANGE_RATE: 'consolidatedexchangerate',
    CONTACT: 'contact',
    CONTACT_CATEGORY: 'contactcategory',
    CONTACT_ROLE: 'contactrole',
    COST_CATEGORY: 'costcategory',
    COUPON_CODE: 'couponcode',
    CREDIT_CARD_CHARGE: 'creditcardcharge',
    CREDIT_CARD_REFUND: 'creditcardrefund',
    CREDIT_MEMO: 'creditmemo',
    CURRENCY: 'currency',
    CUSTOMER: 'customer',
    CUSTOMER_CATEGORY: 'customercategory',
    CUSTOMER_DEPOSIT: 'customerdeposit',
    CUSTOMER_MESSAGE: 'customermessage',
    CUSTOMER_PAYMENT: 'customerpayment',
    CUSTOMER_PAYMENT_AUTHORIZATION: 'customerpaymentauthorization',
    CUSTOMER_REFUND: 'customerrefund',
    CUSTOMER_STATUS: 'customerstatus',
    CUSTOM_RECORD: 'customrecord',
    CUSTOM_TRANSACTION: 'customtransaction',
    DEPARTMENT: 'department',
    DEPOSIT: 'deposit',
    DEPOSIT_APPLICATION: 'depositapplication',
    DESCRIPTION_ITEM: 'descriptionitem',
    DISCOUNT_ITEM: 'discountitem',
    DOWNLOAD_ITEM: 'downloaditem',
    EMAIL_TEMPLATE: 'emailtemplate',
    EMPLOYEE: 'employee',
    ENTITY_ACCOUNT_MAPPING: 'entityaccountmapping',
    ESTIMATE: 'estimate',
    EXPENSE_CATEGORY: 'expensecategory',
    EXPENSE_REPORT: 'expensereport',
    FAIR_VALUE_PRICE: 'fairvalueprice',
    FIXED_AMOUNT_PROJECT_REVENUE_RULE: 'fixedamountprojectrevenuerule',
    FOLDER: 'folder',
    FULFILLMENT_REQUEST: 'fulfillmentrequest',
    GENERIC_RESOURCE: 'genericresource',
    GIFT_CERTIFICATE: 'giftcertificate',
    GIFT_CERTIFICATE_ITEM: 'giftcertificateitem',
    GLOBAL_ACCOUNT_MAPPING: 'globalaccountmapping',
    INBOUND_SHIPMENT: 'inboundshipment',
    INTERCOMP_ALLOCATION_SCHEDULE: 'intercompallocationschedule',
    INTER_COMPANY_JOURNAL_ENTRY: 'intercompanyjournalentry',
    INTER_COMPANY_TRANSFER_ORDER: 'intercompanytransferorder',
    INVENTORY_ADJUSTMENT: 'inventoryadjustment',
    INVENTORY_COST_REVALUATION: 'inventorycostrevaluation',
    INVENTORY_COUNT: 'inventorycount',
    INVENTORY_DETAIL: 'inventorydetail',
    INVENTORY_ITEM: 'inventoryitem',
    INVENTORY_NUMBER: 'inventorynumber',
    INVENTORY_STATUS: 'inventorystatus',
    INVENTORY_STATUS_CHANGE: 'inventorystatuschange',
    INVENTORY_TRANSFER: 'inventorytransfer',
    INVOICE: 'invoice',
    ISSUE: 'issue',
    ITEM_ACCOUNT_MAPPING: 'itemaccountmapping',
    ITEM_DEMAND_PLAN: 'itemdemandplan',
    ITEM_FULFILLMENT: 'itemfulfillment',
    ITEM_GROUP: 'itemgroup',
    ITEM_LOCATION_CONFIGURATION: 'itemlocationconfiguration',
    ITEM_RECEIPT: 'itemreceipt',
    ITEM_REVISION: 'itemrevision',
    ITEM_SUPPLY_PLAN: 'itemsupplyplan',
    JOB: 'job',
    JOB_STATUS: 'jobstatus',
    JOB_TYPE: 'jobtype',
    JOURNAL_ENTRY: 'journalentry',
    KIT_ITEM: 'kititem',
    LABOR_BASED_PROJECT_REVENUE_RULE: 'laborbasedprojectrevenuerule',
    LEAD: 'lead',
    LOCATION: 'location',
    LOT_NUMBERED_ASSEMBLY_ITEM: 'lotnumberedassemblyitem',
    LOT_NUMBERED_INVENTORY_ITEM: 'lotnumberedinventoryitem',
    MANUFACTURING_COST_TEMPLATE: 'manufacturingcosttemplate',
    MANUFACTURING_OPERATION_TASK: 'manufacturingoperationtask',
    MANUFACTURING_ROUTING: 'manufacturingrouting',
    MAP_REDUCE_SCRIPT: 'mapreducescript',
    MARKUP_ITEM: 'markupitem',
    MASSUPDATE_SCRIPT: 'massupdatescript',
    MESSAGE: 'message',
    MFG_PLANNED_TIME: 'mfgplannedtime',
    NEXUS: 'nexus',
    NON_INVENTORY_ITEM: 'noninventoryitem',
    NOTE: 'note',
    NOTE_TYPE: 'notetype',
    OPPORTUNITY: 'opportunity',
    ORDER_SCHEDULE: 'orderschedule',
    OTHER_CHARGE_ITEM: 'otherchargeitem',
    OTHER_NAME: 'othername',
    OTHER_NAME_CATEGORY: 'othernamecategory',
    PARTNER: 'partner',
    PARTNER_CATEGORY: 'partnercategory',
    PAYCHECK: 'paycheck',
    PAYCHECK_JOURNAL: 'paycheckjournal',
    PAYMENT_ITEM: 'paymentitem',
    PAYMENT_METHOD: 'paymentmethod',
    PAYROLL_ITEM: 'payrollitem',
    PCT_COMPLETE_PROJECT_REVENUE_RULE: 'pctcompleteprojectrevenuerule',
    PHONE_CALL: 'phonecall',
    PORTLET: 'portlet',
    PRICE_BOOK: 'pricebook',
    PRICE_LEVEL: 'pricelevel',
    PRICE_PLAN: 'priceplan',
    PRICING_GROUP: 'pricinggroup',
    PROJECT_EXPENSE_TYPE: 'projectexpensetype',
    PROJECT_TASK: 'projecttask',
    PROJECT_TEMPLATE: 'projecttemplate',
    PROMOTION_CODE: 'promotioncode',
    PROSPECT: 'prospect',
    PURCHASE_CONTRACT: 'purchasecontract',
    PURCHASE_ORDER: 'purchaseorder',
    PURCHASE_REQUISITION: 'purchaserequisition',
    REALLOCATE_ITEM: 'reallocateitem',
    RECEIVE_INBOUND_SHIPMENT: 'receiveinboundshipment',
    RESOURCE_ALLOCATION: 'resourceallocation',
    RESTLET: 'restlet',
    RETURN_AUTHORIZATION: 'returnauthorization',
    REVENUE_ARRANGEMENT: 'revenuearrangement',
    REVENUE_COMMITMENT: 'revenuecommitment',
    REVENUE_COMMITMENT_REVERSAL: 'revenuecommitmentreversal',
    REVENUE_PLAN: 'revenueplan',
    REV_REC_SCHEDULE: 'revrecschedule',
    REV_REC_TEMPLATE: 'revrectemplate',
    SALES_ORDER: 'salesorder',
    SALES_ROLE: 'salesrole',
    SALES_TAX_ITEM: 'salestaxitem',
    SCHEDULED_SCRIPT: 'scheduledscript',
    SCHEDULED_SCRIPT_INSTANCE: 'scheduledscriptinstance',
    SCRIPT_DEPLOYMENT: 'scriptdeployment',
    SERIALIZED_ASSEMBLY_ITEM: 'serializedassemblyitem',
    SERIALIZED_INVENTORY_ITEM: 'serializedinventoryitem',
    SERVICE_ITEM: 'serviceitem',
    SHIP_ITEM: 'shipitem',
    SOLUTION: 'solution',
    STATISTICAL_JOURNAL_ENTRY: 'statisticaljournalentry',
    STORE_PICKUP_FULFILLMENT: 'storepickupfulfillment',
    SUBSCRIPTION: 'subscription',
    SUBSCRIPTION_CHANGE_ORDER: 'subscriptionchangeorder',
    SUBSCRIPTION_LINE: 'subscriptionline',
    SUBSCRIPTION_PLAN: 'subscriptionplan',
    SUBSIDIARY: 'subsidiary',
    SUBTOTAL_ITEM: 'subtotalitem',
    SUITELET: 'suitelet',
    SUPPORT_CASE: 'supportcase',
    TASK: 'task',
    TAX_ACCT: 'taxacct',
    TAX_GROUP: 'taxgroup',
    TAX_PERIOD: 'taxperiod',
    TAX_TYPE: 'taxtype',
    TERM: 'term',
    TIME_BILL: 'timebill',
    TIME_ENTRY: 'timeentry',
    TIME_OFF_CHANGE: 'timeoffchange',
    TIME_OFF_PLAN: 'timeoffplan',
    TIME_OFF_REQUEST: 'timeoffrequest',
    TIME_OFF_RULE: 'timeoffrule',
    TIME_OFF_TYPE: 'timeofftype',
    TIME_SHEET: 'timesheet',
    TOPIC: 'topic',
    TRANSFER_ORDER: 'transferorder',
    TRANSACTION: 'transaction',
    UNITS_TYPE: 'unitstype',
    USAGE: 'usage',
    USEREVENT_SCRIPT: 'usereventscript',
    VENDOR: 'vendor',
    VENDOR_BILL: 'vendorbill',
    VENDOR_CATEGORY: 'vendorcategory',
    VENDOR_CREDIT: 'vendorcredit',
    VENDOR_PAYMENT: 'vendorpayment',
    VENDOR_RETURN_AUTHORIZATION: 'vendorreturnauthorization',
    WEBSITE: 'website',
    WORKFLOW_ACTION_SCRIPT: 'workflowactionscript',
    WORK_ORDER: 'workorder',
    WORK_ORDER_CLOSE: 'workorderclose',
    WORK_ORDER_COMPLETION: 'workordercompletion',
    WORK_ORDER_ISSUE: 'workorderissue',
    WORKPLACE: 'workplace',
  },
  Operator: {
    IS: 'is',
    ANYOF: 'anyof',
  },
  Sort: {
    DESC: 'DESC',
    ASC: 'ASC',
  },
  Summary: {
    GROUP: 'GROUP',
  },

};
