import swaggerJSDoc from "swagger-jsdoc"
import { SwaggerUiOptions } from "swagger-ui-express"

const options : swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        name: "Products",
        description: "API operations related to products"
      }
    ],
    info: {
      title: "REST API Node.js / Express / Typescript",
      version: "1.0.0",
      description: "API Docs for products"
    }
  },
  apis: ["./src/router.ts"]
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
  customCss: `
.topbar-wrapper .link {
  content: "Alexis Dev";
  font-size: 22px;
  font-weight: bold;
  color: white;
}
.swagger-ui .topbar {
  background-color: #0f172a;
}
  `,
  customSiteTitle: "Documentación REST API Express / Typescript"
}

export default swaggerSpec
export {
  swaggerUiOptions
}