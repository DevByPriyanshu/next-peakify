'use client'

import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { useAction } from "@/hooks/use-action"
import { createBoard } from "@/actions/create-board"
import { FormSubmit } from "./form-submit"
import { FormInput } from "./form-input"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'
import { FormPicker } from "./form-picker"
import { ElementRef, useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface FormPopoverProps {
    children: React.ReactNode,
    side?: "left" | "top" | "bottom" | "right",
    align?: "start" | "center" | "end",
    sideOffset?: number;
};

export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset = 0,
}: FormPopoverProps) => {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        // Ensures the component only renders after client-side is available
        setIsClient(true);
    }, []);

    const closeRef = useRef<ElementRef<'button'>>(null)
    const router = useRouter()
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            toast.success('Board Created!')
            closeRef.current?.click()
            router.push(`/board/${data.id}`)
        },
        onError: (error) => {
            console.log(error)
            toast.error(error)
        }
    })

    const onSubmit = (formData: FormData) => {
        const title = formData.get('title') as string
        const image = formData.get('image') as string
        execute({ title, image })
    }

    // Render the component only when it's on the client
    if (!isClient) return null;

    return (
        <Popover>
            <PopoverTrigger>
                {children}
            </PopoverTrigger>
            <PopoverContent
                align={align}
                className="w-80 pt-3"
                side={side}
                sideOffset={sideOffset}
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Create Board
                </div>
                <PopoverClose ref={closeRef} asChild>
                    <Button variant='ghost' className="h-auto w-auto absolute p-2 top-2 right-2 text-neutral-600">
                        <X className="h-4 w-4" />
                    </Button>
                </PopoverClose>
                <form className="space-y-4" action={onSubmit}>
                    <div className="space-y-2">
                        <FormPicker
                            id="image"
                            errors={fieldErrors}
                        />
                        <FormInput
                            id="title"
                            label="Board"
                            type="text"
                            errors={fieldErrors}
                        />
                    </div>
                    <div>
                        <FormSubmit className="w-full">
                            Create
                        </FormSubmit>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}
