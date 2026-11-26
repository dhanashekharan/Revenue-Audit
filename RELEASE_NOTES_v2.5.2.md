# Apollo Revenue Assurance & Tariff Governance System
## Release Update Package — Version 2.5.2 (Unified Corporate Architecture)

**Release Date:** November 2026  
**Target Repository:** Apollo Internal GitHub (Revenue Assurance Tool)  
**Security Standard:** Microsoft Entra ID (Azure AD) Enterprise Single Sign-On (OIDC & SAML 2.0)  

---

### 1. Summary of Changes in this Release (v2.5.2)

This release package updates the existing Apollo GitHub repository with native Microsoft Entra ID Single Sign-On and multi-unit role routing:

1. **Enterprise Microsoft Entra ID (Azure AD) SSO Integration:**
   - Native OpenID Connect (OIDC) & SAML 2.0 identity federation.
   - Zero password or credential handling inside application databases.

2. **Multi-Unit Hospital Facility Routing:**
   - Dedicated workspace partitioning for:
     * Corporate Head Office (`all`)
     * Guwahati Excelcare (`excelcare`)
     * Kolkata Multispeciality (`kolkata`)
     * International Patient Cash Hub (`international`)
     * Regional Units (`chennai_greams`, `hyd_jubilee`, `delhi_indraprastha`, `blr_bannerghatta`, `bhubaneswar`)

3. **Four-Tier Role-Based Access Control (RBAC):**
   - Automatically maps incoming users to `Administrator`, `Approver`, `Auditor`, or `Viewer` based on Entra ID Security Groups and App Roles.

4. **Decoupled Architecture:**
   - Zero external gateway dependencies; purely governed by Microsoft Entra ID enterprise directory.

5. **Persistent Disk Storage (`config.json`):**
   - Tenant ID, Client ID, and role mappings are stored permanently in `config.json` on disk, preventing any data loss when browser cache is cleared.

6. **On-Screen Configuration & Reset Controls:**
   - New `⚙ Configure / Change Azure SSO` button directly on the login screen.
   - Instant `🗑 Delete / Reset Saved IDs` option in the setup modal.
   - Shift-click shortcut to force-open configuration settings.

---

### 2. File Manifest of this Release Package

| File Path | Description |
|:---|:---|
| `config.json` | Production configuration file pre-configured for Apollo multi-unit and role mappings. |
| `config.example.json` | Clean template configuration reference. |
| `run_server.py` | Hardened Python micro-server with Azure AD endpoints, dynamic SAML ACS resolution, and disk persistence. |
| `index.html` | Updated login portal with Azure SSO controls, facility search, and keyboard shortcuts. |
| `js/app.js` | Updated client runtime with Tri-Tier identity resolution, token decoding, and disk sync. |
| `docs/Apollo_Enterprise_Azure_AD_SSO_Deployment_Guide.docx` | Executive Word guide for Apollo IT Cloud Administrators. |
| `docs/APOLLO_AZURE_AD_SSO_SETUP_GUIDE.md` | Technical Markdown deployment guide. |
| `docs/APOLLO_AZURE_AD_CONFIG_TEMPLATE.json` | Standalone template for Entra ID configuration. |
| `GITHUB_UPLOAD_INSTRUCTIONS.txt` | Step-by-step instructions for uploading files to Apollo GitHub. |
