import { NextResponse } from "next/server";
// import { generateStaticParams } from "./generateStaticParams";

// export { generateStaticParams };

export function GET(request, { params }) {
  // here I can to do peticiones, operations, consulta a DDBB

  return NextResponse.json({
    message: `Obteniendo tarea con [id] ${params.id}`,
  });
}

export function DELETE(request, { params }) {
  //   console.log(params);
  return NextResponse.json({
    message: `Eliminando tarea con [id] ${params.id}`,
  });
}

export function PUT(request, { params }) {
  //   console.log(params);
  return NextResponse.json({
    message: `Actualizando tarea con [id] ${params.id}`,
  });
}
