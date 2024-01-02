import BaseIcon from "@/app/_components/icons/src/base-icon";
import { SvgIcon } from "@/app/_components/icons/src/icon.types";

export default function SvgIcon(props: SvgIcon) {
    return (
        <BaseIcon {...props}>
          <path d="M16.5 3L7.5 12.002L16.495 21"/>
        </BaseIcon>
    )
}