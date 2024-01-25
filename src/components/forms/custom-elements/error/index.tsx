type Props = {
  error: string | undefined;
};

const ErrorOfField = ({ error }: Props) => {
  return error && <span className="text-red-500 font-semibold text-sm font-sans">{error}</span>;
};

export default ErrorOfField;
