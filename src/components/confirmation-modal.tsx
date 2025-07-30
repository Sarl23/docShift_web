import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const ConfirmationModal = ({
    isOpen,
    onConfirm,
    onCancel,
    title,
    description,
}: {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title: string;
    description: string;
}) => {
    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancel}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>Aceptar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};