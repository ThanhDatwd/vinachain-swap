export const numberFromDecimal = (value: number, decimal: number = 18) => {
  const x = Number("1" + "0".repeat(decimal));
  return value * x;
};

export const numberToLocaleString = (
  value: number | string | undefined,
  currency: "USC" | "USD" | (string & {}),
) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USC",
  })
    .format(Number(value))
    .replace(/[A-Z]/g, "");
};

export const numberWithComma = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const nFormatter = (value: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return value >= item.value;
    });
  return item
    ? (value / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};
