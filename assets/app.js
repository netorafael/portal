const serviceList = document.querySelector("#service-list");
const serviceDetail = document.querySelector("#service-detail");
const serviceSearch = document.querySelector("#service-search");

if (!serviceList || !serviceDetail || !serviceSearch) {
  throw new Error("Estrutura da página incompleta para o protótipo.");
}

let services = [];
let selectedServiceId = "";

const renderDetails = (service) => {
  if (!service) {
    serviceDetail.textContent = "Selecione um serviço para ver os detalhes.";
    return;
  }

  serviceDetail.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
};

const renderList = (filter = "") => {
  const query = filter.trim().toLowerCase();
  const filtered = services.filter((service) =>
    service.name.toLowerCase().includes(query),
  );

  serviceList.innerHTML = "";

  if (!filtered.length) {
    serviceList.innerHTML = "<li>Nenhum serviço encontrado.</li>";
    renderDetails();
    return;
  }

  filtered.forEach((service) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = service.name;
    button.className = service.id === selectedServiceId ? "active" : "";
    button.addEventListener("click", () => {
      selectedServiceId = service.id;
      renderList(serviceSearch.value);
      renderDetails(service);
    });
    li.append(button);
    serviceList.append(li);
  });

  const selected = filtered.find((service) => service.id === selectedServiceId);
  renderDetails(selected);
};

const loadServices = async () => {
  const response = await fetch("assets/services.json");
  services = await response.json();
  renderList();
};

serviceSearch.addEventListener("input", (event) => {
  renderList(event.target.value);
});

loadServices().catch(() => {
  serviceList.innerHTML = "<li>Falha ao carregar serviços.</li>";
});
