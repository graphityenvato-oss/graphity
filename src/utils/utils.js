export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WowCtor = module.WOW || module.default?.WOW || module.default;
      if (typeof WowCtor === "function") {
        new WowCtor({ live: false }).init();
      }
    });
  }
};
