<template>
  <MoleculesHeader></MoleculesHeader>
  <div class="Contact__Header">
    <AtomsText type="Title" text="Contact"></AtomsText>
    <AtomsText
      type="Text"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad libero eligendi quam dolore cumque est, expedita eveniet quas quidem, temporibus animi rerum cum eos ipsum placeat magni repellendus adipisci iusto."
    ></AtomsText>
  </div>
  <div class="Contact__Content">
    <div class="Contact__Box">
      <Icon name="solar:phone-bold" size="1.5em" />
      <h5>TELEFONE</h5>
      <p class="TextBig">+55 11 999-999-999</p>
    </div>
    <div class="Contact__Box">
      <Icon name="material-symbols:mail" size="1.5em" />
      <h5>EMAIL</h5>
      <p class="TextBig">example@example.com</p>
    </div>
  </div>
  <MoleculesFooter></MoleculesFooter>
</template>

<script lang="ts" setup></script>

<style>
.Contact__Header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
  text-align: center;
  background-color: #000000;
}

.Contact__Content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 50px 50px 50px;
}

.Contact__Box{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid white;
  gap: 0;
  min-width: 250px;
}

.TextBig{
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
