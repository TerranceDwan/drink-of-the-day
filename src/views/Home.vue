<template>
  <div class="home" :style="{ backgroundImage: 'url(' + drink.strDrinkThumb + ')' }">
    <h1 class="title">Terrance's Drink of the day</h1>
    <div class="color-overlay"></div>
    <div class="drink-details-container">
      <div class="drink-details">
        <h1>{{ drink.strDrink }}</h1>
        <ul class="ingredient-list">
          <li
            v-for="(ingredient, index) in ingredients"
            :key="index"
          >{{ ingredient[1] }}{{ ingredient[0] }}</li>
        </ul>
        <p>{{ drink.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({ drink: "drinkObj" }),
    ingredients() {
      let ingredientObj = {};
      for (let i = 1; i < 15; i++) {
        if (this.drink["strIngredient" + i.toString()] === null) {
          break;
        } else {
          ingredientObj["ingredient" + i.toString()] = [
            this.drink["strIngredient" + i.toString()],
            this.drink["strMeasure" + i.toString()] + " of "
          ];
        }
      }
      return ingredientObj;
    }
  },
  methods: {
    ...mapActions(["getDrink"])
  },
  mounted() {
    this.getDrink();
  }
};
</script>
<style scoped>
.title {
  color: white;
  font-size: 24px;
  position: absolute;
  width: 100%;
  z-index: 100;
  opacity: 0;
  animation: fade-in 2s 3s forwards;
}
.home {
  background-repeat: no-repeat;
  background-position: center;
  width: fit-content;
  margin: auto;
  position: relative;
}
h1 {
  font-weight: 300;
  font-size: 48px;
  font-family: "Pacifico", cursive;
  margin-bottom: 30px;
}
.color-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
  background: #00000077;
  opacity: 0;
  animation: fade-in 2s 3s forwards;
}
.drink-details-container {
  width: 95%;
  max-width: 600px;
  margin: auto;
  padding: 0px 10px;
  height: 100%;
  display: table;
  position: relative;
  opacity: 0;
  animation: fade-in 2s 3s forwards;
}
.drink-details {
  display: table-cell;
  vertical-align: middle;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
}
.ingredient-list {
  margin-left: 15%;
  text-align: left;
  margin-bottom: 25px;
}
@media only screen and (min-width: 600px) {
  h1 {
    font-weight: 300;
    font-size: 60px;
    margin-bottom: 30px;
  }
  .color-overlay {
  }
  .drink-details-container {
    width: 85%;
  }
  .drink-details {
    font-size: 24px;
  }
  .ingredient-list {
    margin-left: 20%;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
