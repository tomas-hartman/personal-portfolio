export const PortfolioPage = {
  title: "Portfolio page",
  name: "portfolioPage",
  type: "document",
  fields: [
    {
      title: "Projects",
      name: "projects",
      type: "array",
      of: [{type: "project"}],
    }
  ]
}