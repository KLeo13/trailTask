import { Modal, useComputedColorScheme, useMantineTheme, type ModalProps } from "@mantine/core"

const CustomModal: React.FC<ModalProps & {children: any}> = ({
    styles,
    children,
    ...props
}) => {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    
    const defaultStyles: ModalProps["styles"] = {
        content: {
        padding: 10,
        backgroundColor:
            computedColorScheme === "dark"
            ? theme.colors.blue[8]
            : theme.white,
        border: `solid 1px ${
            computedColorScheme === "dark"
            ? theme.colors.blue[7]
            : theme.colors.blue[1]
        }`,
        },
        header: {
            alignItems: "start",
            backgroundColor: "transparent",
            marginBottom: 20,
        },
    };

    return (
        <Modal
            {...props}
            centered
            transitionProps={{ transition: "fade", duration: 200 }}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
            size={props.size || "lg"}
            styles={{
                ...defaultStyles,
                ...styles, // ✅ allow override
            }}
            >
            {children}
        </Modal>
    )
}

export default CustomModal