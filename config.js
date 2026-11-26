// =========================================================================
// APOLLO REVENUE ASSURANCE & TARIFF GOVERNANCE PLATFORM (v2.5.2 ENTERPRISE)
// SINGLE SOURCE OF TRUTH: USER DIRECTORY & ACCESS CONTROL CONFIGURATION
// =========================================================================
// TO GRANT ACCESS: Add your user object inside "user_directory" below.
// TO REVOKE ACCESS: Remove the user from "user_directory".
// NO DEFAULT ACCESS IS GIVEN TO UNLISTED ACCOUNTS (Zero Trust Enforcement).
// =========================================================================

window.APOLLO_CONFIG = {
  "STORAGE_MODE": "local",
  "SQLITE_DB_PATH": "revenue_audit.db",
  "AZURE_AD_CONFIG": {
    "enabled": true,
    "provider": "azure_ad",
    "tenant_id": "1360b829-3785-4d96-ae6d-0111bf154806",
    "client_id": "a58f7538-0678-483b-a92c-2fb78868b35e",
    "redirect_uri": "https://revenue-audit.apollohospitals.com/index.html",
    "saml_entity_id": "https://revenue-audit.apollohospitals.com/saml/metadata",
    "saml_acs_url": "https://revenue-audit.apollohospitals.com/api/saml/acs",
    "allowed_domain": "apollohospitals.com",
    "default_unit": "none",
    "default_role": "none",
    "role_and_unit_mappings": {
      "user_directory": [
        {
          "email": "933154@apollohospitals.com",
          "name": "Corporate Head Office Administrator",
          "unit": "all",
          "role": "Administrator"
        },
        {
          "email": "933054@apollohospitals.com",
          "name": "Corporate Head Office Administrator",
          "unit": "all",
          "role": "Administrator"
        },
        {
          "email": "corporate.admin@apollohospitals.com",
          "name": "Corporate Head Office Administrator",
          "unit": "all",
          "role": "Administrator"
        },
        {
          "email": "siddhant_surana@apollohospitals.com",
          "name": "Siddhant Surana",
          "unit": "excelcare",
          "role": "Auditor"
        },
        {
          "email": "approver.excelcare@apollohospitals.com",
          "name": "Guwahati Excelcare Billing Approver",
          "unit": "excelcare",
          "role": "Approver"
        },
        {
          "email": "viewer.excelcare@apollohospitals.com",
          "name": "Guwahati Reviewer",
          "unit": "excelcare",
          "role": "Viewer"
        },
        {
          "email": "auditor.kolkata@apollohospitals.com",
          "name": "Kolkata Multispeciality Lead Auditor",
          "unit": "kolkata",
          "role": "Auditor"
        },
        {
          "email": "approver.kolkata@apollohospitals.com",
          "name": "Kolkata Finance Approver",
          "unit": "kolkata",
          "role": "Approver"
        },
        {
          "email": "auditor.intl@apollohospitals.com",
          "name": "International Patient Cash Hub Auditor",
          "unit": "international",
          "role": "Auditor"
        },
        {
          "email": "approver.intl@apollohospitals.com",
          "name": "International Patient Hub Approver",
          "unit": "international",
          "role": "Approver"
        },
        {
          "email": "era_raautomation@apollohospitals.com",
          "name": "Chennai Main Hospital Auditor",
          "unit": "chennai_greams",
          "role": "Auditor"
        },
        {
          "email": "auditor.chennai@apollohospitals.com",
          "name": "Chennai Main Hospital Auditor",
          "unit": "chennai_greams",
          "role": "Auditor"
        },
        {
          "email": "auditor.hyderabad@apollohospitals.com",
          "name": "Hyderabad Jubilee Hills Auditor",
          "unit": "hyd_jubilee",
          "role": "Auditor"
        },
        {
          "email": "auditor.delhi@apollohospitals.com",
          "name": "Delhi Indraprastha Unit Auditor",
          "unit": "delhi_indraprastha",
          "role": "Auditor"
        },
        {
          "email": "auditor.bangalore@apollohospitals.com",
          "name": "Bangalore Bannerghatta Unit Auditor",
          "unit": "blr_bannerghatta",
          "role": "Auditor"
        },
        {
          "email": "auditor.bhubaneswar@apollohospitals.com",
          "name": "Bhubaneswar Unit Auditor",
          "unit": "bhubaneswar",
          "role": "Auditor"
        }
      ],
      "group_mappings": {
        "Apollo-Corporate-Admins": {
          "unit": "all",
          "role": "Administrator"
        },
        "Apollo-Excelcare-Auditors": {
          "unit": "excelcare",
          "role": "Auditor"
        },
        "Apollo-Excelcare-Approvers": {
          "unit": "excelcare",
          "role": "Approver"
        },
        "Apollo-Kolkata-Auditors": {
          "unit": "kolkata",
          "role": "Auditor"
        },
        "Apollo-Kolkata-Approvers": {
          "unit": "kolkata",
          "role": "Approver"
        },
        "Apollo-Intl-Auditors": {
          "unit": "international",
          "role": "Auditor"
        },
        "Apollo-Intl-Approvers": {
          "unit": "international",
          "role": "Approver"
        },
        "Apollo-Chennai-Auditors": {
          "unit": "chennai_greams",
          "role": "Auditor"
        },
        "Apollo-Hyderabad-Auditors": {
          "unit": "hyd_jubilee",
          "role": "Auditor"
        },
        "Apollo-Delhi-Auditors": {
          "unit": "delhi_indraprastha",
          "role": "Auditor"
        },
        "Apollo-Bangalore-Auditors": {
          "unit": "blr_bannerghatta",
          "role": "Auditor"
        }
      },
      "email_domain_patterns": []
    },
    "object_id": "89a435ae-76ea-4bbf-9b09-071c247a6074",
    "client_secret": "-ff8Q~YbOwr-gNX2k54eKpH5vfSwlIrqMkRS5bUJ"
  }
};

// Synchronous assignment for instant zero-delay loading
if (window.APOLLO_CONFIG && window.APOLLO_CONFIG.AZURE_AD_CONFIG) {
    window.apolloAzureConfig = window.APOLLO_CONFIG.AZURE_AD_CONFIG;
}
