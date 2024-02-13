const data = {
  services: [
    {
      id: 1,
      head: null,
      name: "Проф.осмотр",
      node: 0,
      price: 100.0,
      sorthead: 20,
    },
    { id: 2, head: null, name: "Хирургия", node: 1, price: 0.0, sorthead: 10 },
    {
      id: 3,
      head: 2,
      name: "Удаление зубов",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 4,
      head: 3,
      name: "Удаление зуба",
      node: 0,
      price: 800.0,
      sorthead: 10,
    },
    {
      id: 5,
      head: 3,
      name: "Удаление 8ого зуба",
      node: 0,
      price: 1000.0,
      sorthead: 30,
    },
    {
      id: 6,
      head: 3,
      name: "Удаление осколка зуба",
      node: 0,
      price: 2000.0,
      sorthead: 20,
    },
    {
      id: 7,
      head: 2,
      name: "Хирургические вмешательство",
      node: 0,
      price: 200.0,
      sorthead: 10,
    },
    {
      id: 8,
      head: 2,
      name: "Имплантация зубов",
      node: 1,
      price: 0.0,
      sorthead: 20,
    },
    { id: 9, head: 8, name: "Коронка", node: 0, price: 3000.0, sorthead: 10 },
    {
      id: 10,
      head: 8,
      name: "Слепок челюсти",
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
  ],
};

// Сортируем массив по полю sorthead
function sortBySorthead(a, b) {
  return a.sorthead - b.sorthead;
}

// Функция для строительства дерева
function buildTree(data, parentId, container) {
  const ul = document.createElement("ul");

  data
    .filter((item) => item.head === parentId)
    .sort(sortBySorthead)
    .forEach((item, index) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = `${index + 1}. ${item.name} (${item.price})`;
      li.appendChild(p);
      ul.appendChild(li);
      if (item.node === 1) {
        const nestedUl = buildTree(data, item.id, ul);
        nestedUl.classList.add("nested");
        li.appendChild(nestedUl);
      }
    });

  return ul;
}

// Контейнер для дерева
const treeContainer = document.getElementById("tree");
// Строим дерево
treeContainer.appendChild(buildTree(data.services, null, treeContainer));
