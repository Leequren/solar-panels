export enum routes {
  main = "/",
  products = "/products",
  configurator = "/products/configurator/",
  productsCardInfo = "/ProductsCardInfoPage",
  cart = "/cart",
}

export enum backendRoutes {
  getFaqs = "/api/faqs/",
  getMainWorkstation = "/api/workstation/getMain/",
  getPreviewCatalogWorkstations = "/api/workstations/getPreviewCatalog/",
  getCatalogWorkstations = "/api/workstations/catalog/",
  getWorkstationInfo = "/api/workstations/getWorkstationById/",
  getParts = "/api/parts/",
  getPartInfo = "/api/parts/getById/",
  postOrder = "/api/order/",
}
