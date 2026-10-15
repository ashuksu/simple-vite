import {icons} from 'lucide-react';
import {tv, type VariantProps} from 'tailwind-variants';

const iconBase = tv({
    base: 'shrink-0 transition-colors',
    variants: {
        color: {
            primary: 'text-blue-600',
            error: 'text-red-600',
            success: 'text-green-600',
            muted: 'text-gray-400',
            current: 'text-current',
        },
    },
    defaultVariants: {
        color: 'current',
    },
});

const iconVariants = tv({
    extend: iconBase,
    variants: {
        size: {
            xs: 'size-3.5',
            sm: 'size-4',
            md: 'size-5',
            lg: 'size-6',
            xl: 'size-8',
        },
    },
    defaultVariants: {
        size: 'sm',
    },
});

export type IconName = keyof typeof icons;

export interface IconProps extends VariantProps<typeof iconVariants> {
    name: IconName;
    className?: string;
    strokeWidth?: number;
    customSize?: number | string;
}

export const Icon = ({name, size, color, className, strokeWidth, customSize}: IconProps) => {
    const IconComponent = icons[name];

    const classes =
        customSize === undefined
            ? iconVariants({size, color, className})
            : iconBase({color, className});

    return <IconComponent className={classes} size={customSize} strokeWidth={strokeWidth}/>;
};