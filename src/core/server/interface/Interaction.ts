import * as alt from 'alt-server';
import { Vector3 } from '../../shared/interfaces/vector';

/**
 * By default Interactions are 'player' only unless specified.
 * @export
 * @interface Interaction
 */
export interface Interaction {
    /**
     * A unique identifier for the Interaction
     */
    uid?: string;

    /**
     * Description of what the Interaction does
     * @type {string}
     * @memberof Interaction
     */
    description?: string;

    /**
     * The position in the 3D space of where this interaction should be.
     * Remember to subtract `1` from the z axis if you're using player coordinates.
     *
     * @type {Vector3}
     * @memberof Interaction
     */
    position?: Vector3;

    /**
     * The max distance in which this interaction can be interacted with.
     * @type {number}
     * @memberof Interaction
     */
    range?: number;

    /**
     * What dimension this player must be in to use this colshape.
     * @type {number}
     * @memberof Interaction
     */
    dimension?: number;

    /**
     * What function to call back after the player has interacted with the Interaction Point
     * @memberof Interaction
     */
    callback?: (player: alt.Player, ...args: any[]) => void;

    /**
     * Data to pass back through the callback.
     * Serves as a way to pass unique data through the callback.
     * @type {Array<any>}
     * @memberof Interaction
     */
    data?: Array<any>;

    /**
     * Should this interaction only work if the player is in a vehicle?
     * @type {boolean}
     * @memberof Interaction
     */
    isVehicleOnly?: boolean;

    /**
     * Used to force an interaction to be player only.
     * By default is neither is specified it is player only.
     * @type {boolean}
     * @memberof Interaction
     */
    isPlayerOnly?: boolean;
}
