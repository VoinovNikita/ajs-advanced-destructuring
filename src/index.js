export default function getProp(obj) {
  const specialArr = [];

  obj.special.forEach((item) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = item;

    specialArr.push({
      id,
      name,
      icon,
      description,
    });
  });

  return specialArr;
}
