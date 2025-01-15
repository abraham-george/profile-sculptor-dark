interface PreviewHeaderProps {
  title: string;
}

export const PreviewHeader = ({ title }: PreviewHeaderProps) => {
  return (
    <h2 className="text-2xl font-bold text-white">{title}</h2>
  );
};