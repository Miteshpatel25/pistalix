module.exports = (dato, root, i18n) => {
  // console.log(dato.serviceSingles);
  // console.log(dato.serviceSingles);
  root.directory("content/services", (articlesDir) => {
    dato.services.forEach((Services, i) => {
      articlesDir.createPost(
        `${Services.serviceName}.md`, "yaml", {
        frontmatter: {
          title: Services.serviceName,
          type: "service",
          image: Services.serviceLogo.toMap(),
          url: Services.url,
          weight: i,
          id: "service",
          tagline: Services.tagline,
          content: Services.addService.toMap()
        },
        content: Services.serviceName
        }
      );
    });
  });

  root.directory("content/singleservices", (articlesDir) => {
    dato.serviceSingles.forEach((Service, i) => {
      articlesDir.createPost(
        `${Service.slugUrlService}.md`, "yaml", {
        frontmatter: {
          title: Service.serviceTitle,
          type: "serviceSingle",
          url: Service.slugUrlService,
          technology_stack: Service.technologyStack,
          stackDescription: Service.stackDescription,
          buttonTagline: Service.buttonTagline,
          features: Service.features.toMap(),
          extraFeaturedBlock: Service.extraFeaturedBlock.toMap(),
          serviceImage: Service.serviceImage.toMap(),
          id: "serviceSingle",
          category: Service.serviceCategory
        },
        content: Service.stackDescription
        }
      );
    });
  });

  // console.log(dato.contact.fax);
  root.directory("content/footers", (articlesDir) => {
      articlesDir.createPost(
        `footer.md`, "yaml", {
        frontmatter: {
          title: "footer",
          mobile: dato.contact.mobile,
          email: dato.contact.email,
          fax: dato.contact.fax,
          type: "footer",
          address: dato.contact.address,
          aboutus: dato.contact.aboutus
        },
        content: dato.contact.email
        }
      );
  });

  console.log(dato.pricingTables);
  root.directory("content/pricingtables", (articlesDir) => {
    dato.pricingTables.forEach((pricingTables, i) => {
      articlesDir.createPost(
        `${pricingTables.planName}.md`, "yaml", {
        frontmatter: {
          title: pricingTables.planName,
          type: "pricingTables",
          id: "pricingTables",
          content: pricingTables.condition.toMap(),
          priceClass: pricingTables.priceClass
        },
        content: pricingTables.planName
        }
      );
    });
  });
}
