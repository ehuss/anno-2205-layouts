'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    Anno2205Layouts.gridSize = 20;

    Anno2205Layouts.maintenanceModules = {
        credits: {
            icon: 'credits_module',
            name: 'Finance Calculator',
            unitSize: [2, 2],
            effect: {credits: '-10%'},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },

        energy: {
            icon: 'energy_module',
            name: 'Accumulator Unit',
            unitSize: [2, 2],
            effect: {energy: '-10%'},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },

        headquarter1: {
            icon: 'headquarter_module_1',
            name: 'Corporation HQ Wing',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter2: {
            icon: 'headquarter_module_2',
            name: 'Corporation HQ Wing',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter3: {
            icon: 'headquarter_module_3',
            name: 'Corporation HQ Intersection',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter4: {
            icon: 'headquarter_module_4',
            name: 'Corporation HQ Terminal',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter5: {
            icon: 'headquarter_module_5',
            name: 'Corporation HQ Terminal',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        logistics: {
            icon: 'logistics_module',
            name: 'Storage Depot',
            unitSize: [2, 2],
            effect: {maintenance: -2},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },

        workforce: {
            icon: 'workforce_module',
            name: 'Drone Hive',
            unitSize: [2, 2],
            effect: {workforce: '-20%'},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },
        //graphene: graphene_module
        //temp: temp_module
    };

    Anno2205Layouts.buildingLevels = {
        earth: [
            {
                id: 'workers',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") 0 0'
                },
                buildings: [
                    {
                        id: 'sunflower-farm',
                        name: 'Sunflower Farm',
                        icon: 'bioresigns',
                        placementType: 'ground',
                        unitSize: [4, 8],
                        // effect
                        // constructionCost
                        // maintenance
                        productionUnit: {
                            name: 'Sunflower Cropland',
                            id: 'sunflower-cropland',
                            // icon: 'bioresigns',
                            unitSize: [5, 8],
                            // placementType: 'ground',
                            // effect
                            // constructionCost
                            // maintenance
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],

                    },
                    {
                        id: 'biopolymer-factory',
                        name: 'Biopolymer Factory',
                        icon: 'biocomposites',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        productionUnit: {
                            name: 'Biopolymer Basins',
                            id: 'biopolymer-basins',
                            unitSize: [3, 5],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'rice-farm',
                        name: 'Rice Farm',
                        icon: 'rice_dish',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        productionUnit: {
                            name: 'Rice Field',
                            id: 'rice-field',
                            unitSize: [7, 7],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'desalinization-plant',
                        name: 'Desalinization Plant',
                        icon: 'water',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'infodrome',
                        name: 'Infodrome',
                        icon: 'information',
                        placementType: 'ground',
                        unitSize: [7, 7],
                    },
                ]
            },
            {
                id: 'operators',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -417px 0'
                },
                buildings: [
                    {
                        id: 'feldspar-quarry',
                        name: 'Feldspar Quarry',
                        icon: 'ceramics',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cobalt-mine',
                        name: 'Cobalt Mine',
                        icon: 'cobalt',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'robot-assembly-hall',
                        name: 'Robot Assembly Hall',
                        icon: 'robots',
                        placementType: 'ground',
                        unitSize: [4, 13],
                        productionUnit: {
                            name: 'Robot Conveyor Belt',
                            id: 'robot-conveyor-belt',
                            unitSize: [4, 10],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                        maintenanceConstructionCost: {credits: 4000, iridium: 30},
                    },
                    {
                        id: 'fruit-plantation',
                        name: 'Fruit Plantation',
                        icon: 'fruit',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        productionUnit: {
                            name: 'Fruit Orchard',
                            id: 'fruit-orchard',
                            unitSize: [4, 9],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'vitamin-condenser',
                        name: 'Vitamin Condenser',
                        icon: 'fruit_drink',
                        placementType: 'ground',
                        unitSize: [3, 4],
                        productionUnit: {
                            name: 'Fruit Press',
                            id: 'fruit-press',
                            unitSize: [2, 2],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'algae-farm',
                        name: 'Algae Farm',
                        icon: 'algae',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'synthcell-incubator',
                        name: 'Synthcell Incubator',
                        icon: 'synth_cells',
                        placementType: 'ground',
                        unitSize: [5, 5],
                        productionUnit: {
                            name: 'Synthcell Chambers',
                            id: 'synthcell-chambers',
                            unitSize: [3, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'biomedical-laboratory',
                        name: 'Biomedical Laboratory',
                        icon: 'rejuvenators',
                        placementType: 'ground',
                        unitSize: [6, 9],
                        unitShape: [
                            [1, 1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 1, 0],
                        ],
                        productionUnit: {
                            name: 'Reaction Pods',
                            id: 'reaction-pods',
                            unitSize: [5, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'security-department',
                        name: 'Security Department',
                        icon: 'security',
                        placementType: 'ground',
                        unitSize: [8, 9],
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                ]
            },
            {
                id: 'executives',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -834px 0'
                },
                buildings: [
                    {
                        id: 'soy-farm',
                        name: 'Soy Farm',
                        icon: 'soy_beans',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        productionUnit: {
                            name: 'Soy Field',
                            id: 'soy-field',
                            unitSize: [4, 4],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cattle-ranch',
                        name: 'Cattle Ranch',
                        icon: 'beef',
                        placementType: 'ground',
                        unitSize: [7, 9],
                        unitShape: [
                            [1, 1, 1, 1, 1, 0, 0],
                            [1, 1, 1, 1, 1, 0, 0],
                            [1, 1, 1, 1, 1, 0, 0],
                            [1, 1, 1, 1, 1, 0, 0],
                            [1, 1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1, 1],
                        ],
                        productionUnit: {
                            name: 'Cattle Pen',
                            id: 'cattle-pen',
                            unitSize: [7, 9],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'vineyard',
                        name: 'Vineyard',
                        icon: 'wine',
                        placementType: 'ground',
                        unitSize: [7, 8],
                        productionUnit: {
                            name: 'Vineyard Terrace',
                            id: 'vineyard-terrace',
                            unitSize: [5, 5],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'food-design-workshop',
                        name: 'Food Design Workshop',
                        icon: 'luxury_food',
                        placementType: 'ground',
                        unitSize: [4, 9],
                        productionUnit: {
                            name: 'Molecular Kitchens',
                            id: 'molecular-kitchens',
                            unitSize: [3, 6],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'flax-plantation',
                        name: 'Flax Plantation',
                        icon: 'plant_fibres',
                        placementType: 'ground',
                        unitSize: [3, 7],
                        productionUnit: {
                            name: 'Flax Planters',
                            id: 'flax-planters',
                            unitSize: [2, 3],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'silicon-mine',
                        name: 'Silicon Mine',
                        icon: 'silica',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'microfabrication-hall',
                        name: 'Microfabrication Hall',
                        icon: 'microchips',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        productionUnit: {
                            name: 'Sterile Chambers',
                            id: 'sterile-chambers',
                            unitSize: [3, 6],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'nano-textile-mill',
                        name: 'Nano Textile Mill',
                        icon: 'intelli_clothes',
                        placementType: 'ground',
                        unitSize: [4, 11],
                        productionUnit: {
                            name: 'Nano-Loom',
                            id: 'nano-loom',
                            unitSize: [5, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'metro-station',
                        name: 'Metro Station',
                        icon: 'mobility',
                        placementType: 'ground',
                        unitSize: [10, 19],
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                ]
            },
            {
                id: 'investors',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -1251px 0'
                },
                buildings: [
                    {
                        id: 'diamond-mine',
                        name: 'Diamond Mine',
                        icon: 'diamant',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'nano-cutting-unit',
                        name: 'Nano Cutting Unit',
                        icon: 'multispectral_prisms',
                        placementType: 'ground',
                        unitSize: [5, 8],
                        productionUnit: {
                            name: 'Polishing Unit',
                            id: 'polishing-unit',
                            unitSize: [5, 5],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'neutronium-lab',
                        name: 'Neutronium Lab',
                        icon: 'replicators',
                        placementType: 'ground',
                        unitSize: [5, 9],
                        unitShape: [
                            [1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                        ],
                        productionUnit: {
                            name: 'Neutronium Generator',
                            id: 'neutronium-generator',
                            unitSize: [4, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'ai-composition-plant',
                        name: 'AI Composition Plant',
                        icon: 'synaptic_circuits',
                        placementType: 'ground',
                        unitSize: [6, 7],
                        productionUnit: {
                            name: 'AI Incubator',
                            id: 'ai-incubator',
                            unitSize: [3, 7],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'android-factory',
                        name: 'Android Factory',
                        icon: 'androids',
                        placementType: 'ground',
                        unitSize: [5, 11],
                        productionUnit: {
                            name: 'Android Assembly Line',
                            id: 'android-assembly-line',
                            unitSize: [4, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'stadium',
                        name: 'Stadium',
                        icon: 'recreation',
                        placementType: 'ground',
                        unitSize: [17, 17],
                    },
                ]
            },
            {
                id: 'ornaments',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -1668px 0'
                },
                buildings: [
                    {
                        id: 'small-park',
                        name: 'Small Park',
                        icon: 'ornamental_park_small',
                        placementType: 'ground',
                        unitSize: [1, 1],
                    },
                    {
                        id: 'medium-park',
                        name: 'Medium Park',
                        icon: 'ornamental_park_medium',
                        placementType: 'ground',
                        unitSize: [2, 2],
                    },
                    {
                        id: 'big-park',
                        name: 'Big Park',
                        icon: 'ornamental_park_large',
                        placementType: 'ground',
                        unitSize: [3, 3],
                    },
                    {
                        id: 'small-parking-lot',
                        name: 'Small Parking Lot',
                        icon: 'ornamental_car_park_small',
                        placementType: 'ground',
                        unitSize: [1, 1],
                    },
                    {
                        id: 'medium-parking-lot',
                        name: 'Medium Parking Lot',
                        icon: 'ornamental_car_park_medium',
                        placementType: 'ground',
                        unitSize: [2, 2],
                    },
                    {
                        id: 'big-parking-lot',
                        name: 'Big Parking Lot',
                        icon: 'ornamental_car_park_large',
                        placementType: 'ground',
                        unitSize: [3, 3],
                    },
                ]
            }
        ],
        arctic: [
            {
                id: 'protectors',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -2085px 0'
                },
                buildings: [
                    {
                        id: 'aluminum-mine',
                        name: 'Aluminum Mine',
                        icon: 'aluminium',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'compression-chamber',
                        name: 'Compression Chamber',
                        icon: 'metal_foam',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        productionUnit: {
                            name: 'Compression Smelters',
                            id: 'compression-smelters',
                            unitSize: [7, 7],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'fishing-harbor',
                        name: 'Fishing Harbor',
                        icon: 'fish',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cannery',
                        name: 'Cannery',
                        icon: 'canned_food',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        productionUnit: {
                            name: 'Canning Conveyor Belt',
                            id: 'canning-conveyor-belt',
                            unitSize: [4, 4],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'molybdenum-mine',
                        name: 'Molybdenum Mine',
                        icon: 'molybdenum',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'neuro-module-factory',
                        name: 'Neuro-Module Factory',
                        icon: 'neuro_implants_2',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        productionUnit: {
                            name: 'Neuro-Module Complex',
                            id: 'neuro-module-complex',
                            unitSize: [5, 9],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'community-center',
                        name: 'Community Center',
                        icon: 'community_center',
                        placementType: 'ground',
                        unitSize: [5, 7],
                    },
                ]
            },
            {
                id: 'scientists',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -2502px 0'
                },
                buildings: [
                    {
                        id: 'plasma-smelter',
                        name: 'Plasma Smelter',
                        icon: 'super_alloys',
                        placementType: 'ground',
                        unitSize: [5, 9],
                        productionUnit: {
                            name: 'Melting Pots',
                            id: 'melting-pots',
                            unitSize: [4, 5],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                        maintenanceConstructionCost: {credits: 500, iridium: 10},
                    },
                    {
                        id: 'coral-farm',
                        name: 'Coral Farm',
                        icon: 'deep_water_corals',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'pharma-lab',
                        name: 'Pharma Lab',
                        icon: 'stimulants',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        productionUnit: {
                            name: 'Enrichment Containers',
                            id: 'enrichment-containers',
                            unitSize: [3, 3],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'methane-extractor',
                        name: 'Methane Extractor',
                        icon: 'methan_clathrate',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'deuterium-strainer',
                        name: 'Deuterium Strainer',
                        icon: 'deuterium',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cryogenics-lab',
                        name: 'Cryogenics Lab',
                        icon: 'super_coolants',
                        placementType: 'ground',
                        unitSize: [4, 8],
                        productionUnit: {
                            name: 'Cryochamber',
                            id: 'cryochamber',
                            unitSize: [4, 7],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'subzero-cleanroom',
                        name: 'Subzero Cleanroom',
                        icon: 'qubit_processors',
                        placementType: 'ground',
                        unitSize: [3, 8],
                        productionUnit: {
                            name: 'Chip Assembly',
                            id: 'chip-assembly',
                            unitSize: [2, 8],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'hardware-fabrication-plant',
                        name: 'Hardware Fabrication Plant',
                        icon: 'quantum_computers',
                        placementType: 'ground',
                        unitSize: [7, 7],
                        productionUnit: {
                            name: 'Air-Locked Labs',
                            id: 'air-locked-labs',
                            unitSize: [4, 7],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'high-security-laboratory',
                        name: 'High Security Laboratory',
                        icon: 'forbidden_science',
                        placementType: 'ground',
                        //TODO: What is the size?
                        unitSize: [1, 1],
                    },
                ]
            },
        ],
        moon: [
            {
                id: 'miners',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -2919px 0'
                },
                buildings: [
                    {
                        id: 'titanium-mine',
                        name: 'Titanium Mine',
                        icon: 'titanium',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'ion-welder',
                        name: 'Ion Welder',
                        icon: 'titan_plating',
                        placementType: 'ground',
                        unitSize: [6, 9],
                        unitShape: [
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [0, 1, 1, 1, 1, 0],
                            [0, 1, 1, 1, 1, 0],
                            [0, 1, 1, 1, 1, 0],
                            [0, 1, 1, 1, 1, 0],
                        ],
                        productionUnit: {
                            name: 'Melting Chamber',
                            id: 'melting-chamber',
                            unitSize: [6, 9],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'core-ice-driller',
                        name: 'Core Ice Driller',
                        icon: 'moon_ice',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'oxygen-separator',
                        name: 'Oxygen Separator',
                        icon: 'oxygen',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        productionUnit: {
                            name: 'Splitting Unit',
                            id: 'splitting-unit',
                            unitSize: [3, 6],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'kreep-gatherer',
                        name: 'Kreep Gatherer',
                        icon: 'rare_earth_elements',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cybernetics-factory',
                        name: 'Cybernetics Factory',
                        icon: 'bio_enhancers',
                        placementType: 'ground',
                        unitSize: [6, 8],
                        productionUnit: {
                            name: 'Cybernetics Manufacture',
                            id: 'cybernetics-manufacture',
                            unitSize: [4, 8],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'maintenance-station',
                        name: 'Maintenance Station',
                        icon: 'colony_safety',
                        placementType: 'ground',
                        unitSize: [7, 7],
                    },
                ]
            },
            {
                id: 'officers',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -3336px 0'
                },
                buildings: [
                    {
                        id: 'aeroponic-farm',
                        name: 'Aeroponic Farm',
                        icon: 'moon_crops',
                        placementType: 'ground',
                        unitSize: [4, 9],
                        productionUnit: {
                            name: 'Aeroponic Greenhouse',
                            id: 'aeroponic-greenhouse',
                            unitSize: [4, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'space-galley',
                        name: 'Space Galley',
                        icon: 'natural_space_food',
                        placementType: 'ground',
                        unitSize: [5, 12],
                        productionUnit: {
                            name: 'Kitchen Hall',
                            id: 'kitchen-hall',
                            unitSize: [8, 12],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'regolith-collector',
                        name: 'Regolith Collector',
                        icon: 'helium_3',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'fusion-preparation-plant',
                        name: 'Fusion Preparation Plant',
                        icon: 'fusion_accumulators',
                        placementType: 'ground',
                        unitSize: [3, 10],
                        productionUnit: {
                            name: 'Preparation Complex',
                            id: 'preparation-complex',
                            unitSize: [6, 10],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'anti-g-workshop',
                        name: 'Anti-G Workshop',
                        icon: 'gravity_generators',
                        placementType: 'ground',
                        unitSize: [5, 10],
                        productionUnit: {
                            name: 'Gravity Modifiers',
                            id: 'gravity-modifiers',
                            unitSize: [10, 10],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'health-center',
                        name: 'Health Center',
                        icon: 'health_care',
                        placementType: 'ground',
                        // TODO: Size?
                        unitSize: [1, 1],
                    },
                ]
            },
        ]
    };

    Anno2205Layouts.commonBuildings = {
        earth: [
            {
                id: 'street',
                name: 'Street',
                icon: 'earth_road',
                placementType: 'ground',
                unitSize: [1, 1],
            },
            {
                id: 'residence',
                name: 'Residence',
                icon: 'residence_earth',
                placementType: 'ground',
                unitSize: [3, 3],
            },
            {
                id: 'residential-complex',
                name: 'Residential Complex',
                icon: 'residence_estate',
                placementType: 'ground',
                unitSize: [6, 6],
            },
            {
                id: 'earth-transportation-center',
                name: 'Transportation Center',
                icon: 'transportation_center_earth',
                placementType: 'ground',
                unitSize: [4, 6],
            },
            {
                id: 'windpark',
                name: 'Windpark',
                icon: 'windpark',
                placementType: 'ground',
                unitSize: [4, 8],
                productionUnit: {
                    name: 'Wind Turbine',
                    id: 'wind-turbine',
                    unitSize: [4, 5],
                },
                productionLimit: 4,
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'tidal-power-station',
                name: 'Tidal Power Station',
                icon: 'tidal_power_station',
                placementType: 'coast',
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'corporation-hq',
                name: 'Corporation HQ',
                icon: 'headquarter_base',
                placementType: 'ground',
                unitSize: [6, 12],
                // productionUnit: {
                //     unitSize: [4, 4],
                // },
                // productionLimit: 30,
                // TODO
                // maintenanceModules: ['headquarter_module_1', 'headquarter_module_2', 'headquarter_module_3', 'headquarter_module_4', 'headquarter_module_5'],
            },
        ],
        arctic: [
            {
                id: 'polar-road',
                name: 'Polar Road',
                icon: 'arctic_road',
                placementType: 'ground',
                unitSize: [1, 1],
            },
            {
                id: 'arctic-dwelling',
                name: 'Arctic Dwelling',
                icon: 'residence_arctic',
                placementType: 'ground',
                unitSize: [5, 5],
            },
            {
                id: 'arctic-transportation-center',
                name: 'Transportation Center',
                icon: 'transportation_center_arctic',
                placementType: 'ground',
                unitSize: [4, 6],
            },
            {
                id: 'geothermal-turbines',
                name: 'Geothermal Turbines',
                icon: 'geothermal_turbinnes',
                placementType: 'coast',
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'gas-power-station',
                name: 'Gas Power Station',
                icon: 'gas_power_plant',
                placementType: 'ground',
                unitSize: [8, 11],
                productionUnit: {
                    name: 'Generator Domes',
                    id: 'generator-domes',
                    unitSize: [4, 8],
                },
                productionLimit: 6,
                // TODO:  Double-check this.
                maintenanceModules: ['credits', 'workforce', 'logistics'],
            },
        ],
        moon: [
            {
                id: 'moon-tracks',
                name: 'Moon Tracks',
                icon: 'moon_road',
                placementType: 'ground',
                unitSize: [1, 1],
            },
            {
                id: 'living-unit',
                name: 'Living Unit',
                icon: 'residence_moon',
                placementType: 'ground',
                unitSize: [5, 5],
            },
            {
                id: 'small-shield-generator',
                name: 'Small Shield Generator',
                icon: 'energy_shielding_small_2',
                placementType: 'ground',
                unitSize: [2, 2],
            },
            {
                id: 'large-shield-generator',
                name: 'Large Shield Generator',
                icon: 'energy_shielding_big_2',
                placementType: 'ground',
                unitSize: [4, 4],
            },
            {
                id: 'lunar-transportation-center',
                name: 'Lunar Transportation Center',
                icon: 'transportation_center_moon',
                placementType: 'ground',
                unitSize: [4, 6],
            },
            {
                id: 'solar-array',
                name: 'Solar Array',
                icon: 'solar_array',
                placementType: 'mountain',
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'fusion-reactor',
                name: 'Fusion Reactor',
                icon: 'fusion_power_plant',
                placementType: 'ground',
                unitSize: [12, 12],
                productionUnit: {
                    name: 'Reactor Coolers',
                    id: 'reactor-coolers',
                    unitSize: [6, 11],
                },
                productionLimit: 6,
                maintenanceModules: ['credits', 'workforce', 'logistics'],
            },
        ]
    };

    // Add "id" attribute to maintenance modules.
    _.each(Anno2205Layouts.maintenanceModules, function(module, key) {
        module.id = key;
    });

    // Maps building id to its description object.
    Anno2205Layouts.unitIdMap = {};

    Anno2205Layouts.initBuildings = function() {
        // Build the unitIdMap.
        _.each(Anno2205Layouts.regions, function(region) {
            _.each(Anno2205Layouts.buildingLevels[region], function(level) {
                _.each(level.buildings, function(building) {
                    Anno2205Layouts.unitIdMap[building.id] = building;
                    if (building.productionUnit !== undefined) {
                        Anno2205Layouts.unitIdMap[building.productionUnit.id] = building.productionUnit;
                    }
                });
            });
            _.each(Anno2205Layouts.commonBuildings[region], function(building) {
                Anno2205Layouts.unitIdMap[building.id] = building;
            });
        });
        _.each(Anno2205Layouts.maintenanceModules, function(module) {
            Anno2205Layouts.unitIdMap[module.id] = module;
        });

        _.each(Anno2205Layouts.unitIdMap, function(unit) {
            // Place the maintenance module definitions directly into the
            // building definitions.
            if (unit.maintenanceModules !== undefined) {
                unit.maintenanceModules = _.map(unit.maintenanceModules, function(module) {
                    return Anno2205Layouts.maintenanceModules[module];
                });
            }
            // Add icon information to the production info objects (for
            // convenience).
            if (unit.productionUnit !== undefined) {
                unit.productionUnit.icon = unit.icon;
                unit.productionUnit.iconScale = 0.6;
            }
        });

        // Add a "style" property for icons to make it easier to apply.
        var spriteMap = Anno2205Layouts.iconSpriteMap;
        _.each(spriteMap, function(spriteInfo, key) {
            spriteInfo.style = {
                'background-image': 'url("images/buttons/construction_icons.png")',
                'background-position': '-' + spriteInfo.x + 'px -' + spriteInfo.y+'px'
            };
        });

        // Replace icon IDs with icon info objects for convenience.
        _.each(Anno2205Layouts.unitIdMap, function(unit) {
            unit.icon = spriteMap[unit.icon];
        });

        // Populate the background image information for the tab buttons.
        var index = 0;
        var width = 139;
        _.each(Anno2205Layouts.regions, function(region) {
            _.each(Anno2205Layouts.buildingLevels[region], function(level) {
                level.backgroundBase = 'url("images/buttons/button-construction-levels-sheet.png") -'+(width*3*index)+'px 0';
                level.backgroundHover = 'url("images/buttons/button-construction-levels-sheet.png") -'+(width + width*3*index)+'px 0';
                level.backgroundActive = 'url("images/buttons/button-construction-levels-sheet.png") -'+(width*2 + width*3*index)+'px 0';
                level.background = level.backgroundBase;
                index += 1;
            });
        });
    };

    Anno2205Layouts.rotateShape = function(shape, orientation) {
        console.log('orientation='+orientation);
        var result = [];
        if (orientation === 0) {
            return shape;
        } else if (orientation == 2) {
            // flip.
            for (var rowNum=shape.length-1; rowNum >=0; rowNum--) {
                result.push(shape[rowNum].slice().reverse());
            }
        } else {
            var width = shape[0].length;
            var height = shape.length;
            for (var i=0; i<width; i++) {
                result.push([]);
            }
            _.each(shape, function(row, rowNum) {
                _.each(row, function(el, colNum) {
                    if (orientation == 1) {
                        // clockwise once.
                        result[colNum][height-rowNum-1] = el;
                    } else if (orientation == 3) {
                        // counterclockwise once
                        // result[width-colNum-1][rowNum] = el;
                        result[width-colNum-1][rowNum] = el;
                    }
                });
            });
        }
        return result;
    };

}(Anno2205Layouts));
