import { LOCALE_KEYS } from './keys';

/**
 * Locales are written with a key and value type.
 * When you get the key of 'greet-user' from the LocaleController
 * It will return a string of 'Hello someVariableYouPass, welcome to the server.'
 * It's a simple way to create locales without hurting performance too much.
 */
export default {
    // Commands
    [LOCALE_KEYS.COMMAND_ADMIN_CHAT]: `_%_ [message] - Speak to other admins`,
    [LOCALE_KEYS.COMMAND_ACCEPT_DEATH]: `_%_ - Respawn at hospital after death`,
    [LOCALE_KEYS.COMMAND_ACTION_MENU]: `_%_ - Create a test action menu`,
    [LOCALE_KEYS.COMMAND_ADD_VEHICLE]: `_%_ [model] - Add a vehicle to your player`,
    [LOCALE_KEYS.COMMAND_ADD_WHITELIST]: `_%_ [discord] - Whitelist a player by Discord ID`,
    [LOCALE_KEYS.COMMAND_OOC]: `_%_ [message] - Speak out of character`,
    [LOCALE_KEYS.COMMAND_BROADCAST]: `_%_ [message] - Announce message server wide`,
    [LOCALE_KEYS.COMMAND_COORDS]: `_%_ [x] [y] [z] - Teleport to some coordinates`,
    [LOCALE_KEYS.COMMAND_DO]: `_%_ [message] - Describe an object, sound, etc.`,
    [LOCALE_KEYS.COMMAND_DUMMY_ITEM]: `_%_ - Get some debug items`,
    [LOCALE_KEYS.COMMAND_GET_ITEM]: `_%_ [item-name] [amount] - Get item/items by dbname/name`,
    [LOCALE_KEYS.COMMAND_LOW]: `_%_ [message] - Speak quietly`,
    [LOCALE_KEYS.COMMAND_MOD_CHAT]: `_%_ [message] - Speak to Admins & Mods`,
    [LOCALE_KEYS.COMMAND_ME]: `_%_ [message] - Describe a roleplay action`,
    [LOCALE_KEYS.COMMAND_NO_CLIP]: `_%_ - Toggle No Clip Mode`,
    [LOCALE_KEYS.COMMAND_QUIT_JOB]: `_%_ - Quit a Job`,
    [LOCALE_KEYS.COMMAND_REMOVE_ALL_WEAPONS]: `_%_ - Remove all weapons`,
    [LOCALE_KEYS.COMMAND_REMOVE_WHITELIST]: `_%_ [discord] - Remove Discord ID from whitelist`,
    [LOCALE_KEYS.COMMAND_REVIVE]: `_%_ [player_id]* - Revive self or others`,
    [LOCALE_KEYS.COMMAND_SEATBELT]: `_%_ - Put on a seatbelt or helmet`,
    [LOCALE_KEYS.COMMAND_SET_ARMOUR]: `_%_ [0-100][player_id]* - Set armour for self or others`,
    [LOCALE_KEYS.COMMAND_SET_CASH]: `_%_ [value] - Set your cash on hand`,
    [LOCALE_KEYS.COMMAND_SET_FOOD]: `_%_ [0-100] - Set your hunger level`,
    [LOCALE_KEYS.COMMAND_SET_HEALTH]: `_%_ [99-199][player_id]* - Set health for self or others`,
    [LOCALE_KEYS.COMMAND_SET_WATER]: `_%_ [0-100] - Set your thirst level`,
    [LOCALE_KEYS.COMMAND_SPAWN_VEHICLE]: `_%_ [index] - Spawn personal vehicle by index`,
    [LOCALE_KEYS.COMMAND_TELEPORTER]: `_%_ - Teleport back to current location with an item`,
    [LOCALE_KEYS.COMMAND_TELEPORT_WAYPOINT]: `_%_ - Teleport to a waypoint. Create Waypoint First`,
    [LOCALE_KEYS.COMMAND_TOGGLE_VEH_LOCK]: `_%_ - Toggle the vehicle lock`,
    [LOCALE_KEYS.COMMAND_TOGGLE_VEH_DOOR]: `_%_ - [0-5] - Toggle a vehicle door`,
    [LOCALE_KEYS.COMMAND_GIVE_VEH_KEY]: `_%_ [id] - Give key to vehicle to player`,
    [LOCALE_KEYS.COMMAND_TOGGLE_ENGINE]: `_%_ - Toggle the vehicle engine`,
    [LOCALE_KEYS.COMMAND_VEHICLE]: `_%_ [model] - Spawn an admin vehicle`,
    [LOCALE_KEYS.COMMAND_WANTED]: `_%_ [player_id] [stars] - Set player wanted level`,
    [LOCALE_KEYS.COMMAND_WHISPER]: `_%_ [player_id][message] - Privately whisper to a nearby player`,
    [LOCALE_KEYS.COMMAND_WEAPON]: `_%_ [name] - Get a weapon by name`,
    [LOCALE_KEYS.COMMAND_CLEAR_INVENTORY]: `_%_ - Clear your Inventory`,
    [LOCALE_KEYS.COMMAND_CLEAR_TOOLBAR]: `_%_ - Clear your Toolbar`,
    [LOCALE_KEYS.COMMAND_CLEAR_EQUIPMENT]: `_%_ - Clear your Equipment`,
    [LOCALE_KEYS.COMMAND_NOT_PERMITTED_CHARACTER]: `Command is not permitted for your character.`,
    [LOCALE_KEYS.COMMAND_NOT_PERMITTED_ADMIN]: `Command is not permitted for your account.`,
    [LOCALE_KEYS.COMMAND_NOT_VALID]: `_%_ is not a valid command.`,
    [LOCALE_KEYS.COMMAND_SET_WEATHER]: `_%_ [weather name] - Override all region weathers`,
    [LOCALE_KEYS.COMMAND_CLEAR_WEATHER]: `_%_ - Turn off weather override`,
    [LOCALE_KEYS.COMMAND_SET_TIME]: `_%_ [hour] - Override time to this hour`,
    [LOCALE_KEYS.COMMAND_CLEAR_TIME]: `_%_ - Clear override for time`,
    [LOCALE_KEYS.COMMAND_REFILL_VEHICLE]: `_%_ - Refills fuel of an vehicle by administrative power`,
    [LOCALE_KEYS.COMMAND_REPAIR_VEHICLE]: `_%_ - Repairs an vehicle by administrative power`,
    [LOCALE_KEYS.COMMAND_TEMP_VEHICLE]: `_%_ [model] - Spawn a temporary vehicle`,
    [LOCALE_KEYS.COMMAND_SET_VEHICLE_HANDLING]: `_%_ [value] - Sets vehicle handling value`,
    [LOCALE_KEYS.COMMAND_SET_VEHICLE_LIVERY]: `_%_ [nummer] - Sets vehicle livery`,
    [LOCALE_KEYS.COMMAND_SESSION_VEHICLE]: `_%_ [model] - Spawn a session vehicle`,
    [LOCALE_KEYS.COMMAND_TOGGLE_VEH_NEON_LIGHTS]: `_%_ - Toggles vehicle neon lights`,
    [LOCALE_KEYS.COMMAND_SET_VEH_NEON_LIGHTS]: `_%_ [<] [>] [ᐱ] [V] - Sets vehicle neon lights`,
    [LOCALE_KEYS.COMMAND_FULL_TUNE_VEHICLE]: `_%_ - Full tunes a vehicle`,
    [LOCALE_KEYS.COMMAND_ADD_VEHICLE_KEY]: `_%_ - Add a key for a vehicle`,
    [LOCALE_KEYS.COMMAND_SET_VEH_DIRT_LEVEL]: `_%_ [level] - Sets vehicle dirt level`,
    // Cannot
    [LOCALE_KEYS.CANNOT_CHAT_WHILE_DEAD]: `Cannot chat while dead.`,
    [LOCALE_KEYS.CANNOT_FIND_PLAYER]: `Could not find that player.`,
    [LOCALE_KEYS.CANNOT_PERFORM_WHILE_DEAD]: `Cannot perform this command while you are dead.`,
    [LOCALE_KEYS.CANNOT_FIND_PERSONAL_VEHICLES]: `Cannot find any personal vehicles.`,
    [LOCALE_KEYS.CANNOT_FIND_THAT_PERSONAL_VEHICLE]: 'Cannot locate that personal vehicle.',
    // Clothing
    [LOCALE_KEYS.CLOTHING_ITEM_IN_INVENTORY]: `A clothing item was sent to your inventory.`,
    // Discord
    [LOCALE_KEYS.DISCORD_ID_NOT_LONG_ENOUGH]: `Discord ID must be at least 18 characters long.`,
    [LOCALE_KEYS.DISCORD_ALREADY_WHITELISTED]: `_%_ is already whitelisted.`,
    [LOCALE_KEYS.DISCORD_NOT_WHITELISTED]: `_%_ is not whitelisted.`,
    [LOCALE_KEYS.DISCORD_ADDED_WHITELIST]: `_%_ was added to the whitelist.`,
    [LOCALE_KEYS.DISCORD_REMOVED_WHITELIST]: `_%_ was removed from the whitelist.`,
    // FUEL
    [LOCALE_KEYS.FUEL_EXIT_VEHICLE_FIRST]: `You must exit your vehicle before fueling.`,
    [LOCALE_KEYS.FUEL_UPDATE_VEHICLE_FIRST]: `You must enter and exit a vehicle first to fuel.`,
    [LOCALE_KEYS.FUEL_VEHICLE_NOT_CLOSE]: `Vehicle is not close enough to fuel.`,
    [LOCALE_KEYS.FUEL_ALREADY_FULL]: `Vehicle already has enough fuel.`,
    [LOCALE_KEYS.FUEL_TOO_FAR_FROM_PUMP]: `Pump is too far from vehicle.`,
    [LOCALE_KEYS.FUEL_HAS_UNLIMITED]: `Vehicle has unlimited fuel. No refuel necessary.`,
    [LOCALE_KEYS.FUEL_CANNOT_AFFORD]: `You cannot afford any fuel.`,
    [LOCALE_KEYS.FUEL_PAYMENT]: `You will pay $_%_ for _%_ units of fuel. Run this menu again to cancel fueling.`,
    [LOCALE_KEYS.FUEL_PAID]: `You paid $_%_ for _%_ units of fuel.`,
    // House
    [LOCALE_KEYS.INTERIOR_INTERACT]: `Interact with House`,
    //Translations related to interiors
    [LOCALE_KEYS.INTERIOR_TOO_FAR_FROM_ENTRANCE]: `Too far from entrance.`,
    [LOCALE_KEYS.INTERIOR_TOO_FAR_FROM_EXIT]: `Too far from exit.`,
    [LOCALE_KEYS.INTERIOR_NOT_ENOUGH_CURRENCY]: `Not Enough Currency`,
    [LOCALE_KEYS.INTERIOR_DOOR_LOCKED]: `Door is locked`,
    [LOCALE_KEYS.INTERIOR_PURCHASED]: `Purchased property with id _%_ for $_%_.`,
    [LOCALE_KEYS.INTERIOR_SOLD]: `Sold property with id _%_ for $_%_.`,
    [LOCALE_KEYS.INTERIOR_NO_STORAGE]: `Interior does not have storage.`,
    // Invalid
    [LOCALE_KEYS.INVALID_VEHICLE_MODEL]: `Vehicle model is not vehicle.`,
    // Interaction
    [LOCALE_KEYS.INTERACTION_TOO_FAR_AWAY]: `You are too far away to interact. Move closer.`,
    [LOCALE_KEYS.INTERACTION_INVALID_OBJECT]: `This object does not have an interaction.`,
    [LOCALE_KEYS.INTERACTION_INTERACT_WITH_OBJECT]: `Interact with Object`,
    [LOCALE_KEYS.INTERACTION_INTERACT_VEHICLE]: `Interact with Vehicle`,
    [LOCALE_KEYS.INTERACTION_VIEW_OPTIONS]: `View Options`,
    // Item
    [LOCALE_KEYS.ITEM_ARGUMENTS_MISSING]: `Arguments are missing.`,
    [LOCALE_KEYS.ITEM_NOT_EQUIPPED]: `No item is equipped in that slot.`,
    [LOCALE_KEYS.ITEM_DOES_NOT_EXIST]: `_%_ does not exist.`,
    [LOCALE_KEYS.ITEM_WAS_ADDED_INVENTORY]: `_%_ was added to your inventory.`,
    [LOCALE_KEYS.ITEM_WAS_ADDED_EQUIPMENT]: `_%_ was added to your equipment.`,
    [LOCALE_KEYS.ITEM_WAS_ADDED_TOOLBAR]: `_%_ was added to your toolbar.`,
    [LOCALE_KEYS.ITEM_WAS_DESTROYED_ON_DROP]: `_%_ was destroyed on drop.`,
    // Job
    [LOCALE_KEYS.JOB_ALREADY_WORKING]: `You are already working on a job.`,
    [LOCALE_KEYS.JOB_NOT_WORKING]: `You are not currently working.`,
    [LOCALE_KEYS.JOB_QUIT]: `You have quit your current job.`,
    // Labels
    [LOCALE_KEYS.LABEL_ON]: `ON`,
    [LOCALE_KEYS.LABEL_OFF]: `OFF`,
    [LOCALE_KEYS.LABEL_BROADCAST]: `Broadcast`,
    [LOCALE_KEYS.LABEL_ENGINE]: `Engine`,
    [LOCALE_KEYS.LABEL_HOSPITAL]: `Hospital`,
    [LOCALE_KEYS.LABEL_BANNED]: `[Banned]`,
    // Player
    [LOCALE_KEYS.PLAYER_IS_TOO_FAR]: `That player is too far away.`,
    [LOCALE_KEYS.PLAYER_IS_TOO_CLOSE]: `That player is too close.`,
    [LOCALE_KEYS.PLAYER_IS_NOT_DEAD]: `That player is not dead.`,
    [LOCALE_KEYS.PLAYER_ARMOUR_SET_TO]: `Your armour was set to: _%_`,
    [LOCALE_KEYS.PLAYER_HEALTH_SET_TO]: `Your health was set to: _%_`,
    [LOCALE_KEYS.PLAYER_SEATBELT_ON]: `You put on your seatbelt.`,
    [LOCALE_KEYS.PLAYER_SEATBELT_OFF]: `You take off your seatbelt.`,
    [LOCALE_KEYS.PLAYER_RECEIVED_BLANK]: `You received _%_ from _%_`,
    // Use
    [LOCALE_KEYS.USE_FUEL_PUMP]: 'Use Fuel Pump',
    [LOCALE_KEYS.USE_ATM]: 'Use ATM',
    [LOCALE_KEYS.USE_VENDING_MACHINE]: 'Use Vending Machine',
    [LOCALE_KEYS.USE_CLOTHING_STORE]: 'Browse Clothing',
    // Weapon
    [LOCALE_KEYS.WEAPON_NO_HASH]: `Weapon does not have a hash.`,
    // Vehicle
    [LOCALE_KEYS.VEHICLE_NO_FUEL]: `Vehicle has no fuel.`,
    [LOCALE_KEYS.VEHICLE_LOCK_SET_TO]: `Vehicle lock has been set to: _%_`,
    [LOCALE_KEYS.VEHICLE_TOGGLE_LOCK]: `Toggle Lock`,
    [LOCALE_KEYS.VEHICLE_TOGGLE_ENGINE]: `Toggle Engine`,
    [LOCALE_KEYS.VEHICLE_IS_LOCKED]: `Closest vehicle is locked.`,
    [LOCALE_KEYS.VEHICLE_ENTER_VEHICLE]: `Get Into / Exit Vehicle`,
    [LOCALE_KEYS.VEHICLE_TOO_FAR]: `Vehicle is too far away.`,
    [LOCALE_KEYS.VEHICLE_NO_VEHICLES_IN_GARAGE]: `There are no vehicles in this garage.`,
    [LOCALE_KEYS.VEHICLE_NO_PARKING_SPOTS]: `There are no parking spots at this garage.`,
    [LOCALE_KEYS.VEHICLE_ALREADY_SPAWNED]: `That vehicle is already spawned.`,
    [LOCALE_KEYS.VEHICLE_COUNT_EXCEEDED]: `You may only have _%_ vehicles spawned at a time. You have exceeded the vehicle spawn count.`,
    [LOCALE_KEYS.VEHICLE_LOCKED]: `Locked`,
    [LOCALE_KEYS.VEHICLE_UNLOCKED]: `Unlocked`,
    [LOCALE_KEYS.VEHICLE_FUEL]: `Fuel`,
    [LOCALE_KEYS.VEHICLE_NO_KEYS]: `You do not have keys for this vehicle.`,
    [LOCALE_KEYS.VEHICLE_NO_STORAGE]: `This vehicle does not have storage.`,
    [LOCALE_KEYS.VEHICLE_NO_TRUNK_ACCESS]: `You do not have access to the trunk.`,
    [LOCALE_KEYS.VEHICLE_NOT_UNLOCKED]: `Vehicle is not currently unlocked.`,
    [LOCALE_KEYS.VEHICLE_NO_OPEN_SEAT]: `Could not find an open seat.`,
    [LOCALE_KEYS.VEHICLE_REFUEL_INCOMPLETE]: `Vehicle Refuel Not Completed`,
    [LOCALE_KEYS.VEHICLE_NO_LONGER_NEAR_VEHICLE]: `You are no longer near this vehicle.`,
    [LOCALE_KEYS.VEHICLE_NOT_RIGHT_SIDE_UP]: `Vehicle is not right side up.`,
    [LOCALE_KEYS.VEHICLE_IS_ALREADY_BEING_PUSHED]: `Vehicle is already being pushed.`,
    [LOCALE_KEYS.VEHICLE_STORAGE_VIEW_NAME]: `Vehicle - _%_ - Storage`,
    [LOCALE_KEYS.VEHICLE_KEY_NAME]: `Key for _%_`,
    [LOCALE_KEYS.VEHICLE_KEY_DESCRIPTION]: `A key for the vehicle model _%_`,
    [LOCALE_KEYS.VEHICLE_MODEL_INVALID]: `Invalid vehicle model.`,
    [LOCALE_KEYS.VEHICLE_CREATED]: `Created Vehicle.`,
    [LOCALE_KEYS.VEHICLE_REFILLED]: `Vehicle refilled.`,
    [LOCALE_KEYS.VEHICLE_REPAIRED]: `Vehicle successfully repaired.`,
    [LOCALE_KEYS.VEHICLE_HAS_NO_MOD_KIT]: `Vehicle doesn't have a mod kit.`,
    [LOCALE_KEYS.VEHICLE_NOT_OWN_BY_YOU]: `Must be in a vehicle you own.`,
    [LOCALE_KEYS.VEHICLE_KEY_GIVEN_TO]: `Minted Vehicle Key for`,
    // Faction
    [LOCALE_KEYS.FACTION_PLAYER_IS_ALREADY_IN_FACTION]: `_%_ is already in a faction or does not exist.`,
    [LOCALE_KEYS.FACTION_CANNOT_CHANGE_OWNERSHIP]: `You are unable to change ownership of the faction.`,
    [LOCALE_KEYS.FACTION_STORAGE_NOT_ACCESSIBLE]: `Storage Not Accessible`,
    [LOCALE_KEYS.FACTION_STORAGE_NO_ACCESS]: `You do not have access to this.`,
    [LOCALE_KEYS.FACTION_ONLY_OWNER_IS_ALLOWED]: `Only the owner can append rank permission(s) or super admin flag to a rank.`,
    [LOCALE_KEYS.FACTION_UNABLE_TO_DISBAND]: `You are unable to disband the faction.`,
    [LOCALE_KEYS.FACTION_NAME_DOESNT_MATCH]: `Passed faction name does not match actual faction name.`,
    [LOCALE_KEYS.FACTION_NOT_THE_OWNER]: `You are not the owner of this faction.`,
    [LOCALE_KEYS.FACTION_COULD_NOT_FIND]: `Could not find your faction.`,
    [LOCALE_KEYS.FACTION_DISABNDED]: `Faction disbanded.`,
    [LOCALE_KEYS.FACTION_BANK_COULD_NOT_WITHDRAW]: `Could not withdraw $_%_.`,
    [LOCALE_KEYS.FACTION_BANK_COULD_NOT_DEPOSIT]: `Could not deposit $_%_`,
    [LOCALE_KEYS.FACTION_BANK_WITHDREW]: `Withdrew $_%_`,
    [LOCALE_KEYS.FACTION_PLAYER_QUITTED]: `_%_ quit the faction.`,
    [LOCALE_KEYS.FACTION_COULDNT_QUIT]: `Could not quit faction because you are the leader.`,
    // World
    [LOCALE_KEYS.WORLD_TIME_IS]: `Current World Time is _%_:_%_`,
    // Storage
    [LOCALE_KEYS.STORAGE_NOT_AVAILABLE]: `No Storage Available`,
    [LOCALE_KEYS.STORAGE_IN_USE]: `Storage in Use`,
    [LOCALE_KEYS.INVENTORY_IS_FULL]: `Inventory is Full`,
    // No Clip
    [LOCALE_KEYS.NOCLIP_SPEED_INFO]: `Left Shift (Sprint Speed) | Scroll (Change Sprint Speed)`,
    [LOCALE_KEYS.NOCLIP_SPEED]: `Speed`,
    // ============================
    // WebView Locales Start Here
    // ============================
    [LOCALE_KEYS.WEBVIEW_JOB]: {
        LABEL_DECLINE: 'Decline',
        LABEL_ACCEPT: 'Accept',
    },
    [LOCALE_KEYS.WEBVIEW_STORAGE]: {
        LABEL_SPLIT_TEXT: 'Move a stack of this quantity?',
    },
    [LOCALE_KEYS.WEBVIEW_INVENTORY]: {
        ITEM_SLOTS: [
            'Hat',
            'Mask',
            'Shirt',
            'Pants',
            'Feet',
            'Glasses',
            'Ears',
            'Bag',
            'Armour',
            'Watches',
            'Bracelets',
            'Accessory',
        ],
        LABEL_SPLIT: 'split',
        LABEL_CANCEL: 'cancel',
        LABEL_DROP_ITEM: 'Drop Item',
        LABEL_WEIGHT: 'Weight',
        LABEL_SPLIT_TEXT: 'Make a stack of this quantity?',
    },
};
