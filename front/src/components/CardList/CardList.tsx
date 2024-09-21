interface CardListProps {
  children: React.ReactNode;
  className?: string;
}
const CardList = ({ children, className = '' }: CardListProps) => {
  return (
    <div
      className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20 ${className}`}
    >
      {children}
    </div>
  );
};
export default CardList;
