import { Metadata } from "next";
import { ProductList } from "@/components/products/ProductList";

export const metadata: Metadata = {
  title: "Products | CogStack",
  description:
    "Explore CogStack's AI infrastructure products: multi-database cognitive architectures, custom MCP servers, and full-platform AI transformation for enterprises.",
};

export default function ProductsPage(): React.JSX.Element {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Production-ready AI infrastructure, not prototypes. Built for
              enterprises that need real systems.
            </p>
          </div>
        </div>
      </section>

      <ProductList />
    </>
  );
}
