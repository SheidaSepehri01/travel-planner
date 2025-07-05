"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useBudgetStore } from "@/stores/budgetStore";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Trash2, ChevronDown, Plus } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import gsap from "gsap";
import { SubmitBtn } from "../ui/SubmitBtn";

const COLORS = ["#16a34a", "#f59e0b", "#dc2626", "#3b82f6", "#9333ea"];

export const BudgetPlanning = (props: { onSubmit: () => void }) => {
  const { onSubmit } = props;
  const {
    costs,
    totalCost,
    totalBudget,
    rest,
    setBudget,
    updateCost,
    removeCost,
    addCost,
  } = useBudgetStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const chartData = useMemo(
    () => [
      ...costs,
      {
        name: "Remaining",
        amount: rest,
        isRemainder: true,
      },
    ],
    [rest, costs]
  );
  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        height: "auto",
        duration: 0.4,
        ease: "power2.inOut",
        overflow: "hidden",
      });
    }
  }, [open]);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="overflow-hidden transition-all duration-300"
      >
        <Card className="bg-yellow-100/40 backdrop-blur-md p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <Label className="text-lg">Total Budget</Label>
              <Input
                type="number"
                value={totalBudget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label>Total Cost</Label>
                  <Input value={totalCost} readOnly />
                </div>
                <div>
                  <Label>Remaining</Label>
                  <Input value={rest} readOnly />
                </div>
              </div>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="amount"
                    nameKey="name"
                    outerRadius={80}
                    innerRadius={45}
                    paddingAngle={3}
                    label={({ name }) => name}
                  >
                    {chartData.map((entry, i) => (
                      <Cell
                        key={`cell-${i}`}
                        fill={
                          "isRemainder" in entry && entry.isRemainder
                            ? "#94a3b8"
                            : COLORS[i % COLORS.length]
                        }
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            {costs.map((cost) => (
              <div key={cost.id} className="flex gap-3 items-center">
                <Button
                  onClick={() => removeCost(cost)}
                  variant="ghost"
                  size="icon"
                >
                  <Trash2 className="text-red-500 w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  className="w-24"
                  value={cost.amount}
                  onChange={(e) =>
                    updateCost({ ...cost, amount: Number(e.target.value) })
                  }
                />
                <Input
                  placeholder="Expense name"
                  value={cost.name}
                  onChange={(e) =>
                    updateCost({ ...cost, name: e.target.value })
                  }
                />
              </div>
            ))}

            <Button
              variant="outline"
              onClick={() => addCost({ name: "", amount: 0 })}
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Expense
            </Button>
          </div>
          <SubmitBtn
            title="continue"
            onSubmit={onSubmit}
            disabled={!costs.length || !totalBudget}
          />
        </Card>
      </div>
    </div>
  );
};
