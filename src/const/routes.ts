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
  getWorkstations = "/api/workstations/",
  getParts = "/api/parts/",
  getPartInfo = "/api/parts/getById/",
  getWorkstation = "/api/workstations/getWorkstationById/",
  postOrder = "/api/order/",
}
