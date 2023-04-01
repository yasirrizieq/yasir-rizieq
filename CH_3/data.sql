CREATE TABLE "pemasok" (
  "id_pemasok" int,
  "nama_pemasok" varchar(50),
  PRIMARY KEY ("id_pemasok")
);

CREATE TABLE "pemasok_komponen" (
  "id_pemasok" int,
  "id_komponen" int,
  "nama_komponen" varchar(50),
  CONSTRAINT "FK_pemasok_komponen.id_pemasok"
    FOREIGN KEY ("id_pemasok")
      REFERENCES "pemasok"("id_pemasok")
);

CREATE TABLE "produk" (
  "id_produk" int,
  "nama_produk" varchar(50),
  "kuantitas" varchar(50),
  PRIMARY KEY ("id_produk")
);

CREATE TABLE "komponen" (
  "id_komponen" int,
  "id_pemasok" int,
  "id_produk" int,
  "nama_komponen" varchar(50),
  "deskripsi" text,
  PRIMARY KEY ("id_komponen"),
  CONSTRAINT "FK_komponen.id_komponen"
    FOREIGN KEY ("id_komponen")
      REFERENCES "pemasok_komponen"("id_komponen"),
  CONSTRAINT "FK_komponen.id_pemasok"
    FOREIGN KEY ("id_pemasok")
      REFERENCES "pemasok"("id_pemasok"),
  CONSTRAINT "FK_komponen.id_produk"
    FOREIGN KEY ("id_produk")
      REFERENCES "produk"("id_produk")
);

CREATE TABLE "produk_komponen" (
  "id_produk" int,
  "id_komponen" int,
  "jumlah" varchar(50),
  CONSTRAINT "FK_produk_komponen.id_produk"
    FOREIGN KEY ("id_produk")
      REFERENCES "produk"("id_produk"),
  CONSTRAINT "FK_produk_komponen.id_komponen"
    FOREIGN KEY ("id_komponen")
      REFERENCES "komponen"("id_komponen")
);

