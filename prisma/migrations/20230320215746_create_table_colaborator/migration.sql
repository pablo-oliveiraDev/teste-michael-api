-- CreateTable
CREATE TABLE "colaborators" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "colaborators_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "colaborators_cpf_key" ON "colaborators"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "colaborators_email_key" ON "colaborators"("email");
