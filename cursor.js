AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },  

  handleClickEvents: function () {
    this.el.addEventListener("click", evt=> {
      const posterContainer=document.querySelector("#poster-container");
      const {state} = posterContainer.getAttribute("shop");
      if(state==="poster-list"){
        const id=this.el.getAttribute("id");
        const postersId = [
          "antman",
          "flash",
          "spiderman",
          "xmen",
        ];
        if(postersId.includes(id)){
          posterContainer.setAttribute("shop", {
            state: "view", 
            selectedCard: id
          });
        }
      }
    });
  },

  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id");
      const postersId = [
        "antman",
        "flash",
        "spiderman",
        "xmen",
      ];
      if (postersId.includes(id)) {
        const postersContainer = document.querySelector("#posters-container");
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", { color: "#1565c0" });
      }
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", { color: "#fff" });
        }
      }
    });
  },
});