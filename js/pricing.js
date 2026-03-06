/**
 * pricing.js
 * All pricing rules for the garden room configurator.
 * Edit prices via admin.html or directly in PRICING_DEFAULTS below.
 */

// ─── PRICING DEFAULTS ──────────────────────────────────────────────────────────
// All prices in one flat object. Admin panel saves overrides to localStorage
// under 'gardenroom_pricing'; PRICING merges them over these defaults.

const PRICING_DEFAULTS = {
  // Foundation
  foundation_base_area:          12,
  foundation_concrete_base:    1800,
  foundation_concrete_extra_sqm:  95,
  foundation_block_base:         550,
  foundation_block_extra_sqm:     45,
  foundation_screws_per_screw:   120,
  foundation_screws_per_sqm:     0.4,
  foundation_screws_min:           4,

  // Roof style add-ons (flat = 0, not stored)
  roof_style_apex:             1400,
  roof_style_leanto:            800,

  // Roof finish add-ons (epdm = 0, not stored)
  roof_finish_shingle_grey:     400,
  roof_finish_shingle_red:      400,
  roof_finish_grass:           1200,
  roof_finish_pebbles:          350,
  roof_finish_cedar:            600,
  roof_finish_corrugated:         0, // PLACEHOLDER — confirm with employer
  roof_finish_copper:             0, // PLACEHOLDER
  roof_finish_shingle_black:      0, // PLACEHOLDER
  roof_finish_coated_tile:        0, // PLACEHOLDER

  // Roof lantern & rooflights
  roof_lantern:                2200,
  rooflight_small:              800, // 1000×1400mm — PLACEHOLDER
  rooflight_medium:            1200, // 1400×1400mm — PLACEHOLDER
  rooflight_large:             1800, // 2000×1400mm — PLACEHOLDER

  // Cladding add-ons (timber = 0, not stored)
  cladding_composite:           700,
  cladding_render:              500,
  cladding_cedar:               950,
  // Extended cladding — all PLACEHOLDER
  cladding_vertical_cedar:      950,
  cladding_redwood_vertical:    900,
  cladding_horizontal_cedar:    980,
  cladding_thermowood_natural: 1100,
  cladding_thermowood_grey:    1150,
  cladding_thermowood_black:   1150,
  cladding_shiplap_white:       750,
  cladding_shiplap_grey:        750,
  cladding_shiplap_black:       800,
  cladding_stone_01:           1400,
  cladding_stone_02:           1400,
  cladding_brick_red_01:       1200,
  cladding_brick_red_02:       1200,
  cladding_brick_yellow:       1250,
  cladding_fibre_cement:       1000,
  cladding_metal_sheet:        1300,

  // Doors
  door_single_base:             850,
  door_double_base:            1600,
  door_bifold_base:            3500,
  door_sliding_base:           2800,
  door_bifold_uplift:           1.7,
  door_pvc_multiplier:          1.2,

  // Windows (tilt = 0, not stored)
  window_long_addon:            200,
  window_vert_addon:            150,
  window_horiz_addon:           150,

  // Structural reinforcement
  reinforce_floor_sqm:           65,
  reinforce_walls_sqm:           75,
  reinforce_ceiling_sqm:         60,

  // Electrical & heating
  electrical_ethernet_point:    250,
  electrical_stove_flue:       2800,
  electrical_fire_boarding:     140,
  electrical_log_fire:          795,
  electrical_radiator:          249,
  // Sockets — all PLACEHOLDER
  electrical_socket_double:      85,
  electrical_socket_floor:      120,
  electrical_socket_usb:         95,
  electrical_socket_tv:          75,
  electrical_socket_data:       250,
  electrical_socket_external:   110,

  // Lighting
  lighting_internal_spotlight:   65,
  lighting_external_downlight:  129,

  // Decking
  decking_softwood_sqm:          95,
  decking_hardwood_sqm:         150, // PLACEHOLDER
  decking_composite_sqm:        175, // PLACEHOLDER
  decking_balustrade_glass_lm:  180, // per linear metre — PLACEHOLDER
  decking_balustrade_picket_lm:  85, // PLACEHOLDER
  decking_balustrade_frameless_lm: 220, // PLACEHOLDER

  // Veranda
  veranda_per_sqm:              200, // PLACEHOLDER

  // Structure type (freestanding = 0, not stored)
  structure_partial:              0, // PLACEHOLDER
  structure_attached:             0, // PLACEHOLDER

  // Interior walls (per m² of wall area) — all PLACEHOLDER
  interior_walls_white_sqm:       0,
  interior_walls_charcoal_sqm:   50,
  interior_walls_plywood_sqm:    80,
  interior_walls_oak_sqm:       120,
  interior_walls_tongue_groove_sqm: 95,

  // Interior flooring (per m² of floor area) — all PLACEHOLDER
  interior_floor_oak_sqm:        65,
  interior_floor_walnut_sqm:     75,
  interior_floor_farm_oak_sqm:   60,
  interior_floor_tiles_sqm:      55,
  interior_floor_polished_concrete_sqm: 70,
  interior_floor_gym_black_sqm:  45,
  interior_floor_white_marble_sqm: 90,
  interior_floor_rubber_sqm:     40,

  // Furniture (per item) — all PLACEHOLDER
  furniture_desk:               450,
  furniture_office_chair:       250,
  furniture_gaming_chair:       350,
  furniture_elliptical:         800,
  furniture_exercise_bike:      500,
  furniture_pool_table:        1200,
  furniture_dart_board:          80,
  furniture_tv:                 600,
  furniture_golf_simulator:    2500,
  furniture_sofa_3seat:         900,
  furniture_corner_sofa:       1400,
  furniture_kitchen_base_unit:  350,
  furniture_kitchen_wall_unit:  280,
  furniture_worktop_oak:        180,
  furniture_worktop_marble:     280,
};

// Merge any admin-saved overrides from localStorage
const PRICING_SAVED = JSON.parse(localStorage.getItem('gardenroom_pricing') || '{}');
const PRICING = Object.assign({}, PRICING_DEFAULTS, PRICING_SAVED);

// ─── DISPLAY LABELS (not in PRICING — cosmetic only, not admin-editable) ───────

const ROOF_STYLE_LABELS = {
  flat: 'Flat Roof', apex: 'Apex Roof', leanto: 'Lean-To Roof',
};

const ROOF_FINISH_LABELS = {
  epdm: 'EPDM Black', shingle_grey: 'Grey Shingle', shingle_red: 'Red Shingle',
  grass: 'Green Roof (Sedum)', pebbles: 'Pebble Ballast', cedar: 'Cedar Shingle',
  corrugated: 'Corrugated', copper: 'Copper', shingle_black: 'Black Shingle',
  coated_tile: 'Coated Tile',
};

const CLADDING_LABELS = {
  timber: 'Timber Cladding', composite: 'Composite Cladding',
  render: 'Render Finish', cedar: 'Cedar Cladding',
  vertical_cedar: 'Vertical Cedar', redwood_vertical: 'Redwood Vertical',
  horizontal_cedar: 'Horizontal Cedar', thermowood_natural: 'Thermowood Natural',
  thermowood_grey: 'Thermowood Grey', thermowood_black: 'Thermowood Black',
  shiplap_white: 'Shiplap White', shiplap_grey: 'Shiplap Grey', shiplap_black: 'Shiplap Black',
  stone_01: 'Stone 01', stone_02: 'Stone 02',
  brick_red_01: 'Red Brick 01', brick_red_02: 'Red Brick 02', brick_yellow: 'Yellow Brick',
  fibre_cement: 'Fibre Cement', metal_sheet: 'Metal Sheet',
};

const FOUNDATION_LABELS = {
  concrete: 'Concrete Base', block: 'Block Base', screws: 'Ground Screws',
};

const DOOR_LABELS = {
  single:  'French Door (Single, 900mm)',
  double:  'French Door (Double, 1800mm)',
  bifold:  'Bi-Fold Door (2400mm)',
  sliding: 'Sliding/Patio Door (2400mm)',
};

const WINDOW_STYLE_LABELS = {
  tilt:  'Tilt & Turn Windows',
  long:  'Long Panel Windows',
  vert:  'Narrow Vertical Windows',
  horiz: 'Narrow Horizontal Windows',
};

const SOCKET_LABELS = {
  double: 'Double Socket', floor: 'Floor Socket', usb: 'USB Socket',
  tv: 'TV Socket', data: 'Data Point', external: 'External Socket',
};

const INTERIOR_WALL_LABELS = {
  white: 'White Walls', charcoal: 'Charcoal Grey Walls', plywood: 'Plywood Walls',
  oak: 'Oak Panels', tongue_groove: 'Tongue & Groove',
};

const INTERIOR_FLOOR_LABELS = {
  oak: 'Oak', walnut: 'Walnut', farm_oak: 'Farm Oak', tiles: 'Tiles',
  polished_concrete: 'Polished Concrete Effect', gym_black: 'Black Gym Flooring',
  white_marble: 'White Marble', rubber: 'Rubber Flooring',
};

const FURNITURE_LABELS = {
  desk: 'Adjustable Desk', office_chair: 'Office Chair', gaming_chair: 'Gaming Chair',
  elliptical: 'Elliptical Trainer', exercise_bike: 'Exercise Bike',
  pool_table: 'Pool Table', dart_board: 'Dart Board', tv: 'Television',
  golf_simulator: 'Golf Simulator Screen', sofa_3seat: '3 Seater Sofa',
  corner_sofa: 'Corner Sofa', kitchen_base_unit: 'Base Unit (1 Door)',
  kitchen_wall_unit: 'Wall Unit (2 Door)', worktop_oak: 'Worktop — Oak',
  worktop_marble: 'Worktop — Marble',
};

const STRUCTURE_LABELS = {
  freestanding: 'Freestanding Room', partial: 'Partial Opening', attached: 'Attached Extension',
};

// ─── FOUNDATION ────────────────────────────────────────────────────────────────

function calcFoundation(state) {
  const area = state.width * state.depth;
  const baseArea = PRICING.foundation_base_area;

  if (state.foundation === 'screws') {
    const count = Math.max(
      PRICING.foundation_screws_min,
      Math.round(area * PRICING.foundation_screws_per_sqm)
    );
    return {
      total: count * PRICING.foundation_screws_per_screw,
      label: FOUNDATION_LABELS.screws,
      screwCount: count,
      detail: `${count} screws × £${PRICING.foundation_screws_per_screw}`,
    };
  }

  const basePrice   = PRICING['foundation_' + state.foundation + '_base'];
  const extraPerSqm = PRICING['foundation_' + state.foundation + '_extra_sqm'];
  const extraArea   = Math.max(0, area - baseArea);
  const extraCost   = extraArea * extraPerSqm;

  return {
    total: basePrice + extraCost,
    label: FOUNDATION_LABELS[state.foundation] ?? state.foundation,
    basePrice,
    extraArea: parseFloat(extraArea.toFixed(2)),
    extraCost,
    extraPerSqm,
    detail: extraArea > 0
      ? `£${basePrice.toLocaleString()} base + ${extraArea.toFixed(1)}m² × £${extraPerSqm}`
      : `£${basePrice.toLocaleString()} (includes up to ${baseArea}m²)`,
  };
}

// ─── ROOF ──────────────────────────────────────────────────────────────────────

function calcRooflight(state) {
  if (!state.rooflight || state.rooflight === 'none') return { total: 0, lines: [] };
  const sizeLabels = { small: '1000×1400mm', medium: '1400×1400mm', large: '2000×1400mm' };
  const cost = PRICING['rooflight_' + state.rooflight] ?? 0;
  return {
    total: cost,
    lines: [{ label: `Rooflight — ${sizeLabels[state.rooflight] ?? state.rooflight}`, cost }],
  };
}

// ─── CLADDING ──────────────────────────────────────────────────────────────────

// (Cladding add-on is read directly in calcTotal; no separate function needed.)

// ─── DOORS ─────────────────────────────────────────────────────────────────────

function calcDoor(state) {
  const doors = state.openings.filter(o => o.type === 'door');
  if (doors.length === 0) return { total: 0, label: 'No doors placed', notes: [], count: 0 };

  let total = 0;
  doors.forEach(op => {
    const style  = op.style ?? 'single';
    const matKey = op.material ?? state.defaultDoorMat ?? 'aluminium';
    let price = PRICING['door_' + style + '_base'] ?? PRICING.door_single_base;
    if (style === 'bifold') price *= PRICING.door_bifold_uplift;
    if (matKey === 'pvc')   price *= PRICING.door_pvc_multiplier;
    total += price;
  });

  return {
    total: Math.round(total),
    label: doors.length === 1 ? (DOOR_LABELS[doors[0].style] ?? 'Door') : `${doors.length} doors`,
    count: doors.length,
    notes: [],
  };
}

// ─── STRUCTURAL REINFORCEMENT ──────────────────────────────────────────────────

function calcReinforcement(state) {
  const floorArea = state.width * state.depth;
  const wallArea  = 2 * (state.width + state.depth) * state.height;
  const lines = [];
  let total = 0;

  if (state.extras.reinforceFloor) {
    const rate = PRICING.reinforce_floor_sqm;
    const cost = Math.round(floorArea * rate);
    total += cost;
    lines.push({ label: `Reinforced Floor (${floorArea.toFixed(1)}m² × £${rate})`, cost });
  }
  if (state.extras.reinforceWalls) {
    const rate = PRICING.reinforce_walls_sqm;
    const cost = Math.round(wallArea * rate);
    total += cost;
    lines.push({ label: `Reinforced Walls (${wallArea.toFixed(1)}m² × £${rate})`, cost });
  }
  if (state.extras.reinforceCeiling) {
    const rate = PRICING.reinforce_ceiling_sqm;
    const cost = Math.round(floorArea * rate);
    total += cost;
    lines.push({ label: `Reinforced Ceiling (${floorArea.toFixed(1)}m² × £${rate})`, cost });
  }

  return { total, lines };
}

// ─── ELECTRICAL & HEATING ──────────────────────────────────────────────────────

function calcElectrical(state) {
  const lines = [];
  let total = 0;

  if (state.ethernetPoints > 0) {
    const rate = PRICING.electrical_ethernet_point;
    const cost = state.ethernetPoints * rate;
    total += cost;
    lines.push({ label: `CAT6 Ethernet (${state.ethernetPoints} point${state.ethernetPoints > 1 ? 's' : ''} × £${rate})`, cost });
  }
  if (state.extras.stoveFlue)    { const c = PRICING.electrical_stove_flue;    total += c; lines.push({ label: 'Stove Flue Kit',           cost: c }); }
  if (state.extras.fireBoarding) { const c = PRICING.electrical_fire_boarding; total += c; lines.push({ label: 'Fire Boarding to Wall',    cost: c }); }
  if (state.extras.logFire)      { const c = PRICING.electrical_log_fire;      total += c; lines.push({ label: 'Electric Log Effect Fire', cost: c }); }
  if (state.extras.radiator)     { const c = PRICING.electrical_radiator;      total += c; lines.push({ label: 'Electric Radiator',        cost: c }); }

  // Sockets
  if (state.sockets) {
    Object.entries(state.sockets).forEach(([key, count]) => {
      if (count > 0) {
        const rate = PRICING['electrical_socket_' + key] ?? 0;
        const cost = count * rate;
        total += cost;
        lines.push({ label: `${SOCKET_LABELS[key] ?? key} (${count} × £${rate})`, cost });
      }
    });
  }

  return { total, lines };
}

// ─── LIGHTING ──────────────────────────────────────────────────────────────────

function calcLighting(state) {
  const lines = [];
  let total = 0;

  if (state.internalLights > 0) {
    const rate = PRICING.lighting_internal_spotlight;
    const cost = state.internalLights * rate;
    total += cost;
    lines.push({ label: `Internal Spotlights (${state.internalLights} × £${rate})`, cost });
  }
  if (state.externalLights > 0) {
    const rate = PRICING.lighting_external_downlight;
    const cost = state.externalLights * rate;
    total += cost;
    lines.push({ label: `External Downlights (${state.externalLights} × £${rate})`, cost });
  }

  return { total, lines };
}

// ─── DECKING ───────────────────────────────────────────────────────────────────

function calcDecking(state) {
  if (!state.extras.decking) return { total: 0, lines: [] };

  const matKey = state.deckingMaterial ?? 'softwood';
  const rate   = PRICING['decking_' + matKey + '_sqm'] ?? PRICING.decking_softwood_sqm;
  const cost   = Math.round(state.deckingArea * rate);
  const matLabel = { softwood: 'Treated Softwood', hardwood: 'Hardwood', composite: 'Composite' };
  const lines = [{ label: `Decking — ${matLabel[matKey] ?? matKey} (${state.deckingArea}m² × £${rate})`, cost }];
  let total = cost;

  const bType = state.deckingBalustrade ?? 'none';
  if (bType !== 'none') {
    const bRate      = PRICING['decking_balustrade_' + bType + '_lm'] ?? 0;
    const perimeter  = parseFloat((2 * (state.width + state.depth)).toFixed(1));
    const bCost      = Math.round(perimeter * bRate);
    const bLabel     = { glass: 'Glass Balustrade', picket: 'Picket Balustrade', frameless: 'Frameless Balustrade' };
    total += bCost;
    lines.push({ label: `${bLabel[bType] ?? bType} (${perimeter}lm × £${bRate})`, cost: bCost });
  }

  return { total, lines };
}

// ─── INTERIOR ──────────────────────────────────────────────────────────────────

function calcInterior(state) {
  const floorArea = state.width * state.depth;
  const wallArea  = parseFloat((2 * (state.width + state.depth) * state.height).toFixed(1));
  const lines = [];
  let total = 0;

  const wallKey  = state.interiorWalls ?? 'white';
  const wallRate = PRICING['interior_walls_' + wallKey + '_sqm'] ?? 0;
  if (wallRate > 0) {
    const cost = Math.round(wallArea * wallRate);
    total += cost;
    lines.push({ label: `Interior Walls — ${INTERIOR_WALL_LABELS[wallKey] ?? wallKey} (${wallArea}m² × £${wallRate})`, cost });
  }

  const floorKey  = state.interiorFloor ?? 'oak';
  const floorRate = PRICING['interior_floor_' + floorKey + '_sqm'] ?? 0;
  if (floorRate > 0) {
    const cost = Math.round(floorArea * floorRate);
    total += cost;
    lines.push({ label: `Flooring — ${INTERIOR_FLOOR_LABELS[floorKey] ?? floorKey} (${floorArea.toFixed(1)}m² × £${floorRate})`, cost });
  }

  return { total, lines };
}

// ─── FURNITURE ─────────────────────────────────────────────────────────────────

function calcFurniture(state) {
  const lines = [];
  let total = 0;

  if (state.furniture) {
    Object.entries(state.furniture).forEach(([key, count]) => {
      if (count > 0) {
        const price = PRICING['furniture_' + key] ?? 0;
        const cost  = count * price;
        total += cost;
        if (cost > 0) lines.push({ label: `${FURNITURE_LABELS[key] ?? key} × ${count}`, cost });
      }
    });
  }

  return { total, lines };
}

// ─── GRAND TOTAL ───────────────────────────────────────────────────────────────

function calcTotal(state) {
  let total = 0;

  total += calcFoundation(state).total;
  total += PRICING['roof_style_' + state.roof]       ?? 0;
  total += PRICING['roof_finish_' + state.roofFinish] ?? 0;
  total += PRICING['cladding_' + state.cladding]      ?? 0;
  total += PRICING['structure_' + (state.structureType ?? 'freestanding')] ?? 0;

  // Windows: sum add-on per placed window by its own style
  const windows = state.openings.filter(o => o.type === 'window');
  windows.forEach(op => {
    total += PRICING['window_' + op.style + '_addon'] ?? 0;
  });

  total += calcDoor(state).total;
  if (state.extras.lantern) total += PRICING.roof_lantern;
  total += calcRooflight(state).total;
  total += calcReinforcement(state).total;
  total += calcElectrical(state).total;
  total += calcLighting(state).total;
  total += calcDecking(state).total;
  total += calcInterior(state).total;
  total += calcFurniture(state).total;

  // Veranda
  if (state.veranda && state.veranda.enabled) {
    const vArea = state.width * (state.veranda.depth ?? 2.0);
    total += Math.round(vArea * PRICING.veranda_per_sqm);
  }

  return total;
}
