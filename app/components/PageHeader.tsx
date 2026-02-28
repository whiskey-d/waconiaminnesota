import Breadcrumb from "./Breadcrumb";

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
  imageUrl?: string;
}

export default function PageHeader({ title, description, breadcrumbs, imageUrl }: PageHeaderProps) {
  return (
    <section className="relative bg-dark overflow-hidden">
      {imageUrl && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark" />
        </>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 mb-3">
          {title}
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
