<script>
import InputSearch from '@/components/InputSearch.vue';
import ContactList from '@/components/ContactList.vue';
import ContactCard from '@/components/ContactCard.vue';
import contactService from '../services/contact.service';

export default {
    components: {
        InputSearch,
        ContactList,
        ContactCard
    },

    data() {
        return {
            contacts: [],
            activeIndex: -1,
            searchText: ""
        }
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        }
    },

    computed: {
        contactStrings() {
            return this.contacts.map((contact) => {
                const { name, email, numberPhone, address } = contact;
                return [name, email, numberPhone, address].join('');
            })
        },

        filteredContacts() {
            if (!this.searchText) return this.contacts;
            return this.contacts.filter((_contact, index) => this.contactStrings[index].includes(this.searchText))
        },

        activeContact() {
            console.log(this.activeIndex);
            if (this.activeIndex < 0) {
                return null;
            }
            console.log(this.filteredContacts[this.activeIndex])
            return this.filteredContacts[this.activeIndex];
        },

        filteredContactsCount() {
            return this.filteredContacts.length;
        }
    },

    methods: {
        async retrieveContacts() {
            try {
                this.contacts = await contactService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },

        async removeAllContacts() {
            if (confirm("Bạn chắc chắn muốn xóa liên hệ này ?")) {
                try {
                    await contactService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        goToAddContact() {
            this.$router.push({ name: "contact.add" })
        }
    },

    mounted() {
        this.refreshList();
    }
}
</script>

<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText"></InputSearch>
        </div>

        <div class="page_contact">
            <div class="mt-3 col-md-6 contactList">
                <h4>Danh bạ
                    <i class="fas fa-address-book"></i>
                </h4>
                <ContactList v-if="filteredContactsCount > 0" :contacts="filteredContacts"
                    v-model:activeIndex="activeIndex">
                </ContactList>
                <p v-else>Không có liên hệ nào.</p>

                <div class="mt-3 col justify-content-around align-items-center list_button">

                    <button class="btn btn-sm btn-primary" @click="refreshList()">
                        <i class="fas fa-redo"></i>Làm mới
                    </button>

                    <button class="btn btn-sm btn-success" @click="goToAddContact()">
                        <i class="fas fa-plus"></i>Thêm mới
                    </button>

                    <button class="btn btn-sm btn-danger" @click="removeAllContacts()">
                        <i class="fas fa-trash"></i>Xóa tất cả
                    </button>

                </div>
            </div>

            <div class="mt-3 col-md-6 contactCard">
                <div v-if="activeContact">
                    <h4>Chi tiết liên hệ
                        <i class="fas fa-address-card"></i>
                    </h4>
                    <ContactCard :contact="activeContact" />
                    <router-link :to="{
                        name: 'contact.edit',
                        params: { id: activeContact._id },
                    }">
                        <span class="mt-2 badge badge-warning">
                            <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.page_contact {
    display: grid;
    grid-template-areas: 'contactList contactCard';
    grid-template-columns: 2.5fr 1.5fr;
    column-gap: 24px;
    min-width: 90%;
    justify-content: center;
}

.contactCard {
    grid-area: contactCard;
    width: 100%;
    min-width: 300px;
}

.list_button {
    display: flex;
}

.contactList {
    grid-area: contactList;
    min-width: 500px;
}

.badge {
    color: blue;
}
</style>