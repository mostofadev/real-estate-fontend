"use client";
import React from "react";
import Table from "./TableMain";
import TableHeader from "./TableHeader";
import TableHeadCell from "./TableHeadCell";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableActions from "./TableActions";
import Image from "next/image";
import Pagination from "../ui/pagination/Pagination";

export default function DynamicTable({
  columns = [],
  data = [],
  pagination,
  onPageChange,
  onDelete = null,
  onView = null,
  onUpdate = null,
  onStatus =null,
  imageField,
}) {
  const IMAGE_STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;
  console.log(IMAGE_STORAGE_URL);

  return (
    <div>
      <Table>
        <TableHeader>
          <tr>
            {columns.map((col, index) => (
              <TableHeadCell key={index}>{col.header}</TableHeadCell>
            ))}
            <TableHeadCell>Action</TableHeadCell>
          </tr>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {columns.map((col, index) => (
                <TableCell key={index}>
                  {col.field === imageField ? (
                    <>
                      <Image
                        src={`${IMAGE_STORAGE_URL}${item[col.field]}`}
                        alt={item.title}
                        width={60}
                        height={60}
                        unoptimized
                        className="rounded-md"
                      />
                    </>
                  ) : (
                    item[col.field]
                  )}
                </TableCell>
              ))}

              <TableCell>
                <TableActions
                  onView={onView ? () => onView(item.id) : null}
                  onDelete={onDelete ? () => onDelete(item.id) : null}
                  onEdit={onUpdate ? () => onUpdate(item.id) : null}
                  onStatus={onStatus ? () => onStatus(item.id):null}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {pagination && (
        <Pagination pagination={pagination} onPageChange={onPageChange} />
      )}
    </div>
  );
}
