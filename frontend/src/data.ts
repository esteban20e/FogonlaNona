import { Comida } from './shared/models/comida';

export const sample_comidas: Comida[] = [
    {
        id: '1',
        name: 'Pizza',
        price: 1000,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italia'],
        //stars: 4.0,
        imagenUrl: 'assets/comida-1.jpg',
        tag: [ 'fastFood', 'Pizza', 'lunch']
    },
    {
        id: '2',
        name: 'Hamburguesa',
        price: 900,
        cookTime: '30',
        favorite: false,
        origins: ['LaNona'],
        //stars: 3.0,
        imagenUrl: 'assets/comida-2.jpg',
        tag: [ 'fastFood', 'beicon', 'lunch']
    },
    {
        id: '3',
        name: 'Lomo',
        price: 1500,
        cookTime: '40-50',
        favorite: false,
        origins: ['LaNona'],
        //stars: 4.0,
        imagenUrl: 'assets/comida-3.jpg',
        tag: [ 'fastFood', 'Lomo', 'Sanwi']
    },
    {
        id: '4',
        name: 'Empanadas',
        price: 2000,
        cookTime: '40-50',
        favorite: false,
        origins: ['LaNona'],
        //stars: 4.0,
        imagenUrl: 'assets/comida-4.jpg',
        tag: [ 'fastFood', 'Empanadas', 'lunch']
    },
    {
        id: '5',
        name: 'milanesa',
        price: 1000,
        cookTime: '50',
        favorite: true,
        origins: ['LaNona'],
       // stars: 4.0,
        imagenUrl: 'assets/comida-5.jpg',
        tag: [ 'vegana', 'pollo', 'carne']
    },
    {
        id: '6',
        name: 'Pollo',
        price: 1000,
        cookTime: '40-50',
        favorite: false,
        origins: ['LaNona'],
       // stars: 4.0,
        imagenUrl: 'assets/comida-6.jpg',
        tag: [ 'asado', 'horno', 'especial']
    },

]