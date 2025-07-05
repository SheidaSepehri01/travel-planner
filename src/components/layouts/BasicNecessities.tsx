"use client";

import React, { useState } from "react";
import { usePackingListStore } from "@/stores/packingListStore";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { SubmitBtn } from "../ui/SubmitBtn";

export const BasicNecessities = (props: { onSubmit: () => void }) => {
  const { onSubmit } = props;
  const { items, addItems, removeItem, updateItem } = usePackingListStore();

  return (
    <div className="space-y-4 w-full">
      <div className={clsx("transition-all w-full overflow-hidden min-h-60 ")}>
        <Card className="p-4 w-full h-full bg-yellow-100/30 backdrop-blur-md">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-2 w-full bg-white/80 rounded-lg "
            >
              <Checkbox
                checked={item.done}
                onCheckedChange={(checked) =>
                  updateItem({ ...item, done: !!checked })
                }
              />
              <Input
                value={item.title}
                onChange={(e) => updateItem({ ...item, title: e.target.value })}
                className={clsx("flex-1", {
                  "line-through text-muted-foreground": item.done,
                })}
              />
              <Button
                onClick={() => removeItem(item.id)}
                variant="ghost"
                size="icon"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </div>
          ))}
          <Button
            variant="secondary"
            className="w-full gap-2 text-green-900"
            onClick={() => addItems("New item")}
          >
            <Plus className="w-4 h-4" />
            Add new item
          </Button>
          <SubmitBtn
            title="continue"
            onSubmit={onSubmit}
            disabled={!items.length}
          />
        </Card>
      </div>
    </div>
  );
};
