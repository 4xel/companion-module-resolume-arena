import { CompanionAction } from "../../../../../instance_skel_types"
import ArenaRestApi from "../../arena-api/rest"

export function connectClip(restApi: () => ArenaRestApi | null): CompanionAction {
  return {
    label: 'Connect Clip',
    options: [
      {
        id: 'layer',
        type: 'number',
        label: 'Layer number',
        default: 1,
        min: 1,
        max: 65535
      },
      {
        id: 'column',
        type: 'number',
        label: 'Column number',
        default: 1,
        min: 1,
        max: 65535
      }
    ],
    callback: async ({ options }: { options: any }): Promise<void> =>
      await restApi()?.Clips.connect(options.layer, options.column)
  }
}