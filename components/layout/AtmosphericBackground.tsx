export function AtmosphericBackground() {
  return (
    <div className="atmospheric-bg" aria-hidden>
      <div
        className="absolute -left-[8%] top-[6%] h-[520px] w-[520px] rounded-full opacity-[0.22] blur-[120px] max-md:h-[260px] max-md:w-[260px] max-md:opacity-[0.14]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
        }}
      />
      <div
        className="absolute right-[2%] top-[28%] h-[440px] w-[440px] rounded-full opacity-[0.18] blur-[130px] max-md:hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.3), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[35%] h-[380px] w-[380px] rounded-full opacity-[0.14] blur-[110px] max-md:hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(196,181,253,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}
