type SectionTitleProps = {
    title: string;
  };
  
  export default function SectionTitle({
    title,
  }: SectionTitleProps) {
    return (
      <h2 className="mb-12 text-center text-4xl font-bold theme-text">
        {title}
      </h2>
    );
  }