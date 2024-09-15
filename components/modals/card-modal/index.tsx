"use client"

import { useQuery } from "@tanstack/react-query"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useCardModal } from "@/hooks/use-card-modal"
import { CardWithList } from "@/types"
import { fetcher } from "@/lib/fetcher"
import { Header } from "./header"
import { Description } from "./description"
import { Actions } from "./action"
import { AuditLog } from "@prisma/client"
import { Activity } from "./activity"


export const CardModal = () => {
    const id = useCardModal((state) => state.id)
    const isOpen = useCardModal((state) => state.isOpen)
    const onClose = useCardModal((state) => state.onClose)

    const { data: cardData } = useQuery<CardWithList>({
        queryKey: ["card", id],
        queryFn: () => fetcher(`/api/cards/${id}`),
    });
    
    const { data: auditLogsData } = useQuery<AuditLog[]>({
        queryKey: ["card-logs", id],
        queryFn: () => fetcher(`/api/cards/${id}/logs`),
    });
    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent>
                {!cardData
                    ? <Header.Skeleton />
                    : <Header data={cardData} />
                }
                <div>
                    <div>
                        <div>
                            {!cardData
                                ? <Description.Skeleton />
                                : <Description data={cardData} />
                            }
                            {!auditLogsData
                                ? <Activity.Skeleton />
                                : <Activity items={auditLogsData} />
                            }
                        </div>
                    </div>
                    {!cardData
                    ?<Actions.Skeleton/>
                : <Actions data={cardData}/>
                }
                </div>
            </DialogContent>
        </Dialog >
    )
}