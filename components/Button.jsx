import Image from "next/image";

const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button className={`flexCenter gap-3 rounded border ${variant} ${full ? 'w-full' : ''}`} type={type}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
