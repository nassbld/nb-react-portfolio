export default function SectionTitle({ label, title }) {
    return (
        <div className="mb-12">
      <span className="text-[#fdbe26] text-xs font-mono tracking-widest uppercase">
        {label}
      </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
            <div className="w-12 h-1 bg-[#fe5200] rounded mt-4" />
        </div>
    );
}
