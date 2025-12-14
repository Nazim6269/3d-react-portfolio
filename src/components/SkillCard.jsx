const SkillCard = ({ skill }) => {
  return (
    <div
      className="min-w-55 flex flex-col items-center gap-3
                 bg-linear-to-br from-[#0e1016] to-[#29292f]
                 border border-white/10 rounded-xl p-6
                 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={skill.img}
        alt={skill.name}
        className="w-16 h-16 object-contain"
      />

      <h3 className="text-white font-semibold text-lg">{skill.name}</h3>

      <span
        className={`text-xs px-3 py-1 rounded-full
          ${
            skill.status === "Completed"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
      >
        {skill.status}
      </span>
    </div>
  );
};

export default SkillCard;
