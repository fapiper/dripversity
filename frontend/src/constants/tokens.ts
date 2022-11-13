const length = 21;

const all = Array.from({ length: length }, (_, i) => ({
    image: require("@/assets/tokens/images/" + i + ".png"),
    attributes: require("@/assets/tokens/attributes/" + i + ".json"),
}));

export const tokens = {
    length,
    all,
};
