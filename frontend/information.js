// For minimizing
// Code for the menu click when screen is small
document.addEventListener('DOMContentLoaded', () => {
  const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Element not found: ${selector}`);
  };

  const links = getElement('.topnavlinks');
  const navBtnDOM = getElement('.navbtn');

  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('showlinks');
  });
});

// Vue framework
const recipeData = [
      {
        image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1746952448/hainanese_chicken_rice_idbkve.jpg',
        name: 'Haininese Chicken Rice',
        description: 'A classic Italian pasta dish with rich meat sauce.',
        time: 'Prep : 20 min | Cook : 15 min',
        tag: ['Rice','Chicken'],
        ingredients: ['1 cup of rice','500g of Chicken Thigh','1/4 cup of soy sauce'],
        tool: ['Pot', 'Pan', 'Wooden Spoon'],
        instructions: [
          'Boil water and cook spaghetti until al dente.',
          'In a pan, cook minced meat until browned.',
          'Add tomato sauce and let simmer for 15 minutes.',
          'Combine spaghetti with the sauce and serve hot.']
      },
      
      {
        image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1746952448/spaghetti_bolognese_mbo4h8.jpg',
        name: 'Spaghetti Bolognese',
        description: 'A classic Italian pasta dish with rich meat sauce.',
        time: 'Prep : 20 min | Cook : 10 min',
        tag: ['Spaghetti','Beef'],
        ingredients: ['250g of spaghetti','100g of ground beef','1 can of tomatoes'],
        tool: ['Pot', 'Pan', 'Wooden Spoon'],
        instructions: [
          'Boil water and cook spaghetti until al dente.',
          'In a pan, cook minced meat until browned.',
          'Add tomato sauce and let simmer for 15 minutes.',
          'Combine spaghetti with the sauce and serve hot.']
      },
  
      {
            image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1747011066/pancake_eynn5g.jpg',
            name: 'Buttermilk Pancakes',
            description: 'A classic Italian pasta dish with rich meat sauce.',
            time: 'Prep : 10 min | Cook : 10 min',
            tag: ['Flour','Milk'],
            ingredients: ['250g of all purpose flour','1 cup of milk','2 eggs'],
            tool: ['Pot', 'Pan', 'Wooden Spoon'],
            instructions: [
              'Boil water and cook spaghetti until al dente.',
              'In a pan, cook minced meat until browned.',
              'Add tomato sauce and let simmer for 15 minutes.',
              'Combine spaghetti with the sauce and serve hot.']
      },
      {
            image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1747011185/meatballs_y7ktrz.jpg',
            name: 'Italian Meatballs',
            description: 'A classic Italian pasta dish with rich meat sauce.',
            time: 'Prep : 40 min | Cook : 15 min',
            tag: ['Tomato','Beef'],
            ingredients: ['250g of tomato','250g of ground beef','1 can of tomatoes'],
            tool: ['Pot', 'Pan', 'Wooden Spoon'],
            instructions: [
              'Boil water and cook spaghetti until al dente.',
              'In a pan, cook minced meat until browned.',
              'Add tomato sauce and let simmer for 15 minutes.',
              'Combine spaghetti with the sauce and serve hot.']
      }
     ]

const tagData = [
      {
            image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1747372847/rawspaghetti_bfm8h5.jpg',
            name: 'Rice',
            description: '1 Recipe',
            time: '4 weeks | Pantry',
      },
      {
            image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1747372847/rawspaghetti_bfm8h5.jpg',
            name: 'Spaghetti',
            description: '1 Recipe',
            time: '2 weeks | Pantry',
      },
      {
            image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1747372847/rawspaghetti_bfm8h5.jpg',
            name: 'Tomato',
            description: '2 Recipe',
            time: '2 weeks | Fridge',
      },
      {
            image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1747372847/rawspaghetti_bfm8h5.jpg',
            name: 'Chicken',
            description: '1 Recipe',
            time: '1 weeks | Fridge',
      },
      {
            image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1747372847/rawspaghetti_bfm8h5.jpg',
            name: 'Beef',
            description: '2 Recipe',
            time: '1 weeks | Fridge',
      },
      {
            image: 'https://res.cloudinary.com/dckzvbn8n/image/upload/v1747372847/rawspaghetti_bfm8h5.jpg',
            name: 'Flour',
            description: '1 Recipe',
            time: '4 weeks | Pantry',
      }
    ]


const Home = {
    template: '#home',
    data() {
    return {
      recipes: recipeData,
      filteredRecipes: recipeData,
      activeFilters: []
    };
  },
  computed: {
   uniqueTag() {
      const tag = this.recipes.flatMap(r => r.tag);
      return [...new Set(tag)];
    }
  },
  methods: {
    updateFiltered(tags) {
      if (tags.length === 0) {
        this.filteredRecipes = this.recipes;
        return;

      }

      this.filteredRecipes = this.recipes.filter(recipe =>
        tags.every(tag =>
          recipe.name.toLowerCase().includes(tag.toLowerCase()) ||
          recipe.tag.some(t => t.toLowerCase().includes(tag.toLowerCase()))
        )
      );
    },
    
    selectRecipe(recipe) {
      console.log("Selected:", recipe.name);
    },
    
    filterBytag(tag) {
      const term = tag.toLowerCase();
      const results = this.recipes.filter(recipe =>
        recipe.tag.some(t => t.toLowerCase() === term)
      );
      this.filteredRecipes = results;
    }
  },
  
  watch: {
    activeFilters: {
    handler(newFilters) {
      // Adds delay to the animation for smoother look and experience
      setTimeout(() => {
        if (newFilters.length === 0) 
        {
          this.filteredRecipes = this.recipes;
        } 
        else 
        {
          this.filteredRecipes = this.recipes.filter(recipe =>
            newFilters.every(filter =>
              recipe.name.toLowerCase().includes(filter.toLowerCase()) ||
              recipe.tag.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
            )
          );
        }
      }, 100); // 100ms delay for animation
    },
    deep: true,
    immediate: true
  }
}
};

const Explore = {
    template: '#explore',
    data() {
      return {
        recipes: recipeData,
        filteredRecipes: recipeData
      };
  },
  methods: {
    updateFiltered(tags) {
      if (tags.length === 0) {
        this.filteredRecipes = this.recipes;
        return;
      }
      
      this.filteredRecipes =this.recipes.filter(recipe => 
        tags.every(tag => 
          recipe.name.toLowerCase().includes(tag.toLowerCase()) ||
          recipe.tag.some(t => t.toLowerCase().includes(tag.toLowerCase()))
        )
       );
    }
  }
};

const RecipeDetail = {
    template: '#recipeDetail',
    data() {
    return {
      recipes: recipeData
    };
  }
}

const Pantry = {
    template: '#pantry'
}

const About = {
  template: '#about',
    data() {
    return {
      recipes: recipeData
    };
  }
}


Vue.component('recipe-card', {
  template: '#recipecardstemplate',
  props: ['recipe']
});

Vue.component('searchbar', {
  template: '#searchtemplate',
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      searchQuery: '',
      showDropdown: false,
      selectedFilters: []
    };
  },
  computed: {
  //Filters out results based on name and tag based on the query
    filteredResults() {
      const query = this.searchQuery.toLowerCase();
      
      const nameMatches = this.recipes
        .filter(recipe => recipe.name.toLowerCase().includes(query))
        .map(recipe => recipe.name);

      const tagMatches = this.recipes
        .flatMap(recipe => recipe.tag)
        .filter(tag => tag.toLowerCase().includes(query));
      
     const allMatches = [...nameMatches, ...tagMatches];
     const uniqueMatches = [...new Set(allMatches)];

     return uniqueMatches;
       
    }
  },
  methods: {
    onSearch() {
      this.showDropdown = !!this.searchQuery && this.filteredResults.length;
     
    },
    selectResult(result) {
      if(!this.selectedFilters.includes(result)) {
        this.selectedFilters.push(result);
        this.$emit('update-filters',this.selectedFilters);
      }
      this.searchQuery = '';
      this.showDropdown = false;
    },
    removeFilter(filter) {
      this.selectedFilters = this.selectedFilters.filter(f => f !== filter);
      this.$emit('update-filters', this.selectedFilters);
    },
    resetFilters() {
      this.selectedFilters = [];
      this.$emit('update-filters',[])
    },
    addTagFromInput() {
      const term = this.searchQuery.trim();
      if (term && !this.selectedFilters.includes(term)) {
        this.selectedFilters.push(term);
        this.$emit('update-filters', this.selectedFilters);
      }
      this.searchQuery = '';
      this.showDropdown = false;
    }
  }
});

Vue.component('pantry-component', {
  template: '#pantrytemplate',
  data() {
    return {
      pantryItems: [],
      currentIndex: 0
    };
  },
  methods: {
    addItem() {
      if (this.currentIndex < tagData.length) {
        this.pantryItems.push(tagData[this.currentIndex++]);
      } else {
        alert('No more items to add!');
      }
    },
    removeItem() {
      if (this.pantryItems.length > 0) {
        this.pantryItems.pop();
        this.currentIndex = Math.max(0, this.currentIndex - 1);
      }
    }
  },
  mounted() {
    // Load 3 items by default when page loads
    for (let i = 0; i < 3 && this.currentIndex < tagData.length; i++) {
      this.addItem();
    }
  }
});

const routes = [
    { path: '/', component: Home },
    { path: '/explore', component: Explore },
    { path: '/recipeDetail', component: RecipeDetail },
    { path: '/pantry', component: Pantry },
    { path: '/about', component: About }
]

const router = new VueRouter({
    routes
});

var app=new Vue({
  el: "#app",  
  router,
     
});

// Features todo list 
// Credit
// Custom events
// Dynamic & Async components

// High distinction
// Enter/Leave transition
// State Transitions
// Routing