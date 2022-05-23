var coordenadas = {
    lat: 0,
    lng: 0,
  };
  
  var propiedades = {
    center: coordenadas,
    zoom: 2,
  };
  
  function obtieneMarcadores() {
    const markers = [
      {
        name: "Mexico",
        longitude: "-99.1276",
        latitude: "19.427",
        flag: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59c76197-f87d-4f40-a319-cdbb626a5b90/dck0f0a-b2269b21-a2f1-415d-8e1d-1c045ef1de26.png/v1/fill/w_612,h_350,q_70,strp/mexico_flag_redesign_by_mobiyuz_dck0f0a-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvNTljNzYxOTctZjg3ZC00ZjQwLWEzMTktY2RiYjYyNmE1YjkwXC9kY2swZjBhLWIyMjY5YjIxLWEyZjEtNDE1ZC04ZTFkLTFjMDQ1ZWYxZGUyNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.TQvBC7IS99Amo2z-vFc2KFexAJQie68G1SNyvTlbJnc"
      },
      {
        name: "Brasil",
        longitude: "-47.9292",
        latitude: "-15.7801",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png"
      },
      {
        name: "España",
        longitude: "-3.70327",
        latitude: "40.4167",
        flag: "https://th.bing.com/th/id/OIP.CGFicpdr02LdyB3iI2QRVwHaE8?pid=ImgDet&rs=1"
      },
    ];
  
    return markers;
  }
  
  function iniciaMapa() {
    const map = new google.maps.Map(document.getElementById("map"), propiedades);
  
    const marcadores = obtieneMarcadores();
  
    console.log(marcadores);
  
    for (marcador of marcadores) {
      let marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
        title: marcador.name,
      });
    }
  }