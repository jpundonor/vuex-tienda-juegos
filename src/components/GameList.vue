<template>
  <h1>Tienda 32 Bits</h1>
  <h2>Lista de juegos</h2>
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in games" :key="game.codigo">
        <td>{{ game.codigo }}</td>
        <td>{{ game.nombre }}</td>
        <td>{{ game.stock }}</td>
        <td>{{ game.precio }}</td>
        <td>
          <button @click="updateStock(game.codigo, '+')">+</button>
          <button @click="updateStock(game.codigo, '-')">-</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GameList",
  computed: {
    ...mapGetters(["games"]),
  },
  methods: {
    ...mapActions(["modifyStock"]),
    updateStock(codigo, quantity) {
      this.modifyStock({ codigo, quantity });
    },
  },
};
</script>

<style>
table {
  border: 2px solid ghostwhite;
  padding: 10px;
  margin: 10px;
}
th, td {
  border: 1px solid ghostwhite;
  padding: 0 50px;
}
th {
  background-color: darkslategrey;
}
button {
  margin-left: 5px
}
</style>
