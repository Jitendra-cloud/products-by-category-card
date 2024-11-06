//@ui5-bundle ns/products_by_category_card/Component-preload.js
sap.ui.require.preload({
	"ns/products_by_category_card/i18n/i18n.properties":'PACKAGE_TITLE=Package Title\nPACKAGE_SUBTITLE=Package Subtitle\nPACKAGE_SHORTTITLE=Package Shorttitle\nPACKAGE_INFO=Package Info\nPACKAGE_DESCRIPTION=Package Description\nPACKAGE_KEYWORD1=Keyword 1\nPACKAGE_KEYWORD2=Keyword 2\n\n\n\n\n',
	"ns/products_by_category_card/i18n/i18n_en.properties":'PACKAGE_TITLE=Package Title\nPACKAGE_SUBTITLE=Package Subtitle\nPACKAGE_SHORTTITLE=Package Shorttitle\nPACKAGE_INFO=Package Info\nPACKAGE_DESCRIPTION=Package Description\nPACKAGE_KEYWORD1=Keyword 1\nPACKAGE_KEYWORD2=Keyword 2\n\n\n',
	"ns/products_by_category_card/manifest.json":'{"_version":"1.14.0","sap.app":{"id":"ns.products_by_category_card","type":"card","title":"Products by Category Card","subTitle":"UI5 Integration Card of Type List","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"phone":true,"tablet":true},"icons":{"icon":"sap-icon://list"}},"sap.card":{"type":"List","configuration":{"destinations":{"ES5":{"name":"ES5","defaultUrl":"/sap/opu/odata/sap/EPM_REF_APPS_SHOP_SRV/"}},"parameters":{"title":{"value":"List Card with Top {{parameters.maxItems}} Products"},"subTitle":{"value":"These are the top sellers this month"},"maxItems":{"value":4},"selectedCategoryName":{"value":"Computer Systems"}},"filters":{"mainCategory":{"value":"{{parameters.selectedCategoryName}}","type":"string","label":"Main Category","description":"Filter products by main category.","item":{"path":"/d/results","template":{"key":"{Id}","title":"{Name}"}},"data":{"request":{"url":"{{destinations.ES5}}/sap/opu/odata/sap/EPM_REF_APPS_SHOP_SRV/MainCategories","withCredentials":true}}}}},"data":{"request":{"url":"{{destinations.ES5}}/sap/opu/odata/sap/EPM_REF_APPS_SHOP_SRV/Products","parameters":{"$filter":"MainCategoryName eq \'{filters>/mainCategory/value}\'"},"withCredentials":true},"path":"/d/results"},"designtime":"dt/configuration","header":{"title":"Products filtered by {filters>/mainCategory/selectedItem/title} category","subTitle":"{{parameters.subTitle}}","icon":{"src":"sap-icon://desktop-mobile"},"status":{"text":"{{parameters.maxItems}} of 20"}},"content":{"item":{"title":"{Name}","description":"{Description}","icon":{"src":"{ImageUrl}"},"info":{"value":"{AverageRating}","state":"{= ${AverageRating} > 3.5 ? \'Success\' : \'Warning\' }"}},"maxItems":"{{parameters.maxItems}}"}},"sap.platform.mobilecards":{"compatible":false}}'
});
//# sourceMappingURL=Component-preload.js.map
