import { z } from 'zod';

export type UIColors = {
  BG1: string;
  BG2: string;
  BG3: string;
  FG1: string;
  FG2: string;
  FG3: string;
  AC1: string;
  AC2: string;
  BORDER: string;
  INFO: string;
  ERROR: string;
  WARNING: string;
  SUCCESS: string;
  lineHighlight: string;
  selection: string;
  findMatch: string;
};

export type AnsiColors = {
  Black: string;
  Red: string;
  Green: string;
  Yellow: string;
  Blue: string;
  Magenta: string;
  Cyan: string;
  White: string;
  BrightBlack: string;
  BrightRed: string;
  BrightGreen: string;
  BrightYellow: string;
  BrightBlue: string;
  BrightMagenta: string;
  BrightCyan: string;
  BrightWhite: string;
};

export type SyntaxColors = {
  keyword: string;
  comment: string;
  function: string;
  functionCall: string;
  method: string;
  methodCall: string;
  variable: string;
  variableReadonly: string;
  variableDeclaration: string;
  variableProperty: string;
  type: string;
  typeParameter: string;
  constant: string;
  class: string;
  parameter: string;
  property: string;
  propertyDeclaration: string;
  operator: string;
  storage: string;
  other: string;
  language: string;
  supportVariable: string;
  supportFunction: string;
  supportMethod: string;
  supportProperty: string;
  punctuation: string;
  punctuationQuote: string;
  punctuationBrace: string;
  punctuationComma: string;
  selector: string;
  support: string;
  modifier: string;
  control: string;
  controlFlow: string;
  controlImport: string;
  tag: string;
  tagPunctuation: string;
  attribute: string;
  unit: string;
  datetime: string;
};

export enum ColorSchemes {
  // Traditional Color Schemes
  Monochromatic = 'Monochromatic',
  Analogous = 'Analogous',
  Complementary = 'Complementary',
  SplitComplementary = 'SplitComplementary',
  Triadic = 'Triadic',
  Tetradic = 'Tetradic',
  GoldenRatio = 'GoldenRatio',
  GoldenRatio3 = 'GoldenRatio3',
  Fibonacci = 'Fibonacci',
  PentagramStar = 'PentagramStar',
  VesicaPiscis = 'VesicaPiscis',
  FlowerOfLife = 'FlowerOfLife',
  PlatonicSolids = 'PlatonicSolids',
  SpiralOfTheodorus = 'SpiralOfTheodorus',
  MetatronsCube = 'MetatronsCube',
  SeedOfLife = 'SeedOfLife',
  FibonacciSequence = 'FibonacciSequence',
  GoldenSpiral = 'GoldenSpiral',
  MetallicMeans = 'MetallicMeans',
  ContinuedFraction = 'ContinuedFraction',
  GoldenTrisection = 'GoldenTrisection',
  FareySequence = 'FareySequence',
  NobleNumbers = 'NobleNumbers',
  GoldenTriangle = 'GoldenTriangle',
  SriYantra = 'SriYantra',
  KabbalahTreeOfLife = 'KabbalahTreeOfLife',
  Torus = 'Torus',
  MandelbrotSet = 'MandelbrotSet',
  SierpinskiTriangle = 'SierpinskiTriangle',
  KochSnowflake = 'KochSnowflake',
  CelticKnot = 'CelticKnot',
  Labirinth = 'Labirinth',
  YinYang = 'YinYang',
  StarTetrahedron = 'StarTetrahedron',
  Hamsa = 'Hamsa',
  Enneagram = 'Enneagram',
  Hexagram = 'Hexagram',
  ChakraSymbols = 'ChakraSymbols',
  SpiralDynamics = 'SpiralDynamics',
  DoubleTorus = 'DoubleTorus',
  RosettePattern = 'RosettePattern',
  NestedPolygons = 'NestedPolygons',

  // Set 1: Fundamental Sacred Geometry`
  CubeOfSpace = 'CubeOfSpace',
  FibonacciSpiralMatrix = 'FibonacciSpiralMatrix',
  FlowerOfLifeHarmonics = 'FlowerOfLifeHarmonics',
  GoldenRectangleSubdivisions = 'GoldenRectangleSubdivisions',
  HypercubeProjections = 'HypercubeProjections',
  LoxodromicSpiral = 'LoxodromicSpiral',
  MetatronVariations = 'MetatronVariations',
  PentagonalSymmetries = 'PentagonalSymmetries',
  PlatonicSolidsDuals = 'PlatonicSolidsDuals',
  PythagoreanSpiral = 'PythagoreanSpiral',
  SacredSoundFrequencies = 'SacredSoundFrequencies',
  SacredTriangles = 'SacredTriangles',
  TorusKnots = 'TorusKnots',
  VesicaPiscesSequence = 'VesicaPiscesSequence',
  VitruvianProportions = 'VitruvianProportions',

  // Set 2: Advanced Sacred Patterns
  CosmicCubeProjections = 'CosmicCubeProjections',
  DoubleFibonacci = 'DoubleFibonacci',
  FractalPenrose = 'FractalPenrose',
  MerkabaFieldHarmonics = 'MerkabaFieldHarmonics',
  PhiSpiralMandala = 'PhiSpiralMandala',
  QuantumGeometryGrid = 'QuantumGeometryGrid',
  SacredPolygonNesting = 'SacredPolygonNesting',
  SacredVortex = 'SacredVortex',
  StellatedOctahedron = 'StellatedOctahedron',
  VectorEquilibrium = 'VectorEquilibrium',

  // Set 3: Sacred Harmony
  DivineProportion = 'DivineProportion',
  HarmonicResonance = 'HarmonicResonance ',
  OctahedronProjections = 'OctahedronProjections',
  PhiGridSystem = 'PhiGridSystem',
  RhombicDodecahedron = 'RhombicDodecahedron',
  SacredIntersectionPoints = 'SacredIntersectionPoints',
  SacredSpirals = 'SacredSpirals',
  SeedOfLifeVariations = 'SeedOfLifeVariations',
  TetractysPattern = 'TetractysPattern',
  TruncatedIcosahedron = 'TruncatedIcosahedron',

  // Set 4: Sacred Patterns
  AtomicOrbital = 'AtomicOrbital',
  CosmicLattice = 'CosmicLattice',
  CrystalSystems = 'CrystalSystems',
  DNAHelix = 'DNAHelix',
  DivineMatrix = 'DivineMatrix',
  FlowerOfLifeMetamorphosis = 'FlowerOfLifeMetamorphosis',
  QuantumVortex = 'QuantumVortex',
  SacredHarmonograph = 'SacredHarmonograph',
  SacredWaveFunctions = 'SacredWaveFunctions',
  UnifiedField = 'UnifiedField',

  // Set 5: Natural Elements
  ChakraVortex = 'ChakraVortex',
  CosmicMicrostructures = 'CosmicMicrostructures',
  CrystallineGrid = 'CrystallineGrid',
  CymaticPatterns = 'CymaticPatterns',
  GalacticSpiral = 'GalacticSpiral',
  MerkabaField = 'MerkabaField',
  QuantumEntanglement = 'QuantumEntanglement',
  SacredPolyhedra = 'SacredPolyhedra',
  SoundGeometry = 'SoundGeometry',
  TempleGeometry = 'TempleGeometry',

  // Set 6: Wave and Quantum Patterns
  QuantumField = 'QuantumField',
  SacredBiology = 'SacredBiology',
  CosmicString = 'CosmicString',
  HolographicUniverse = 'HolographicUniverse',
  PlasmaDynamics = 'PlasmaDynamics',
  ZeroPoint = 'ZeroPoint',
  TorusEnergy = 'TorusEnergy',
  SacredFractals = 'SacredFractals',
  VoidGeometry = 'VoidGeometry',
  LightMatrix = 'LightMatrix',

  // Set 7: Universal Patterns
  AethericField = 'AethericField',
  CelestialHarmonics = 'CelestialHarmonics',
  CosmicFire = 'CosmicFire',
  EarthGrid = 'EarthGrid',
  ElementalPatterns = 'ElementalPatterns',
  QuantumConsciousness = 'QuantumConsciousness',
  SacredWater = 'SacredWater',
  TimeSpirals = 'TimeSpirals',
  UnifiedFieldResonance = 'UnifiedFieldResonance',
  WindSpirals = 'WindSpirals',

  // Set 8: Sound and Light
  CosmicSeed = 'CosmicSeed',
  CreationMatrix = 'CreationMatrix',
  CrystallineConsciousness = 'CrystallineConsciousness',
  DivineNetworks = 'DivineNetworks',
  EntanglementFields = 'EntanglementFields',
  LifeGeometry = 'LifeGeometry',
  LightCodes = 'LightCodes',
  MirrorSymmetries = 'MirrorSymmetries',
  SoundMatrices = 'SoundMatrices',
  UniversalFlow = 'UniversalFlow',

  // Set 9: Time and Space
  ConsciousnessGrid = 'ConsciousnessGrid',
  CosmicMemory = 'CosmicMemory',
  DivineArchitecture = 'DivineArchitecture',
  EnergyGeometry = 'EnergyGeometry',
  HarmonyPatterns = 'HarmonyPatterns',
  NatureGeometry = 'NatureGeometry',
  ProportionMatrix = 'ProportionMatrix',
  SpaceGeometry = 'SpaceGeometry',
  SymmetryFields = 'SymmetryFields',
  TimeGeometry = 'TimeGeometry',

  // set 10: Vibration and Creation
  BreathGeometry = 'BreathGeometry',
  CosmicSeedLife = 'CosmicSeedLife',
  HeartGeometry = 'HeartGeometry',
  InfiniteCreation = 'InfiniteCreation',
  LightLanguage = 'LightLanguage',
  MatrixCode = 'MatrixCode',
  MerkabaFields = 'MerkabaFields',
  SoulGeometry = 'SoulGeometry',
  VibrationGeometry = 'VibrationGeometry',
  VoidPatterns = 'VoidPatterns',

  HarmonicRessonance = 'HarmonicRessonance',
  RhombieDodecahedron = 'RhombieDodecahedron',

  PythagoreanTuning = 'PythagoreanTuning',
  ZodiacHarmonics = 'ZodiacHarmonics',
  SacredDanceSpirals = 'SacredDanceSpirals',
  AlchemicalSeals = 'AlchemicalSeals',
  VedicSquares = 'VedicSquares',
  SoundMandala = 'SoundMandala',
  HermeticSymbols = 'HermeticSymbols',
  DruidOgham = 'DruidOgham',
  RunicArrays = 'RunicArrays',
  SacredButterfly = 'SacredButterfly',
  LotusUnfolding = 'LotusUnfolding',
  LabyrinthalPaths = 'LabyrinthalPaths',
  StonehengeAlignment = 'StonehengeAlignment',
  AngelonicSeals = 'AngelonicSeals',
  SacredKnots = 'SacredKnots',
  MusicOfSpheres = 'MusicOfSpheres',
  VortexMathematics = 'VortexMathematics',
  HebrewLetters = 'HebrewLetters',
  SacredRainbow = 'SacredRainbow',
  DervishSpirals = 'DervishSpirals',

  PyramidHarmonics = 'PyramidHarmonics',
  ZigguratLevels = 'ZigguratLevels',
  ParthenonProportions = 'ParthenonProportions',
  GothicArchVaults = 'GothicArchVaults',
  SacredMandala = 'SacredMandala',
  NautilusSpiral = 'NautilusSpiral',
  PineConeFibonacci = 'PineConeFibonacci',
  SunflowerPhyllotaxis = 'SunflowerPhyllotaxis',
  CrystalLattice = 'CrystalLattice',
  PlatinumTriangle = 'PlatinumTriangle',
  SolomonSeal = 'SolomonSeal',
  TreeOfLifePaths = 'TreeOfLifePaths',
  ChakraFrequencies = 'ChakraFrequencies',
  TaoistBagua = 'TaoistBagua',
  IslamicTessellation = 'IslamicTessellation',
  SriChakra = 'SriChakra',
  CelticSpiral = 'CelticSpiral',
  MayanCalendar = 'MayanCalendar',
  EgyptianFractions = 'EgyptianFractions',
  AztecSunstone = 'AztecSunstone',

  KleinBottle = 'KleinBottle',
  CalabiYau = 'CalabiYau',
  HopfFibration = 'HopfFibration',
  RiemannZeta = 'RiemannZeta',
  ModularForms = 'ModularForms',
  BanachTarski = 'BanachTarski',
  MinkowskiSpacetime = 'MinkowskiSpacetime',
  PenroseTiling = 'PenroseTiling',
  LanglandsProgram = 'LanglandsProgram',
  QuantumKnots = 'QuantumKnots',
  StringTheoryBranes = 'StringTheoryBranes',
  BlackHoleSingularity = 'BlackHoleSingularity',
  HolomorphicForms = 'HolomorphicForms',
  AlgebraicVariety = 'AlgebraicVariety',
  ToroidalCompactification = 'ToroidalCompactification',
  SupersymmetricOrbifolds = 'SupersymmetricOrbifolds',
  AdiabaticInvariants = 'AdiabaticInvariants',
  ChernSimons = 'ChernSimons',
  YangMillsFields = 'YangMillsFields',
  EinsteinManifold = 'EinsteinManifold'
}

export const UIColorsSchema = z.object({
  BG1: z.string(),
  BG2: z.string(),
  BG3: z.string(),
  FG1: z.string(),
  FG2: z.string(),
  FG3: z.string(),
  AC1: z.string(),
  AC2: z.string(),
  BORDER: z.string(),
  INFO: z.string(),
  ERROR: z.string(),
  WARNING: z.string(),
  SUCCESS: z.string(),
  lineHighlight: z.string(),
  selection: z.string(),
  findMatch: z.string()
});

export const SyntaxColorsSchema = z.object({
  keyword: z.string(),
  comment: z.string(),
  function: z.string(),
  functionCall: z.string(),
  method: z.string(),
  methodCall: z.string(),
  variable: z.string(),
  variableReadonly: z.string(),
  variableDeclaration: z.string(),
  variableProperty: z.string(),
  type: z.string(),
  typeParameter: z.string(),
  constant: z.string(),
  class: z.string(),
  parameter: z.string(),
  property: z.string(),
  propertyDeclaration: z.string(),
  operator: z.string(),
  storage: z.string(),
  other: z.string(),
  language: z.string(),
  supportVariable: z.string(),
  supportProperty: z.string(),
  supportFunction: z.string(),
  supportMethod: z.string(),
  punctuation: z.string(),
  punctuationQuote: z.string(),
  punctuationBrace: z.string(),
  punctuationComma: z.string(),
  selector: z.string(),
  support: z.string(),
  modifier: z.string(),
  control: z.string(),
  controlFlow: z.string(),
  controlImport: z.string(),
  tag: z.string(),
  tagPunctuation: z.string(),
  attribute: z.string(),
  unit: z.string(),
  datetime: z.string()
});

export const AnsiColorsSchema = z.object({
  Black: z.string(),
  Red: z.string(),
  Green: z.string(),
  Yellow: z.string(),
  Blue: z.string(),
  Magenta: z.string(),
  Cyan: z.string(),
  White: z.string(),
  BrightBlack: z.string(),
  BrightRed: z.string(),
  BrightGreen: z.string(),
  BrightYellow: z.string(),
  BrightBlue: z.string(),
  BrightMagenta: z.string(),
  BrightCyan: z.string(),
  BrightWhite: z.string()
});

export type LCHColor = {
  mode: 'lch';
  l: number;
  c: number;
  h: number;
  alpha?: number;
};

export type ColorEvent = {
  color: string;
};
