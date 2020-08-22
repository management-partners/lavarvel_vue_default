<template>
  <!-- Main content -->
  <section class="content lst-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title float-right">
                <router-link to="/admin/category/add" class="btn btn-outline-info">Add New</router-link>
              </h3>
              <div class="row">
                <label for="show" class="change-item">Shows</label>
                <select class="form-control col-md-1">
                  <option v-for="(page, index) in pagingPage" :key="index">{{page}}</option>
                </select>
                <label for="show" class="change-item">Item</label>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body table-responsive-md">
              <table id="tblCategory" class="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th v-for="(col, index) in lstColumn" :key="index" class="text-center">
                      {{col.name}}
                      <i class="fa fa-fw fa-sort float-right"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item) in data" :key="item.id">
                    <td class="w-5 p-3">{{item.id}}</td>
                    <td class="w-85 p-3">{{item.name}}</td>
                    <td class="w-5 p-3">{{item.slug}}</td>
                    <td class="w-5 p-3">{{item.parent}}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td :colspan="colSpan">
                      <div class="col-md-5 float-left">
                        <p>
                          Show
                          <label for>{{selectPge}}/{{tatolPage}}</label> items
                        </p>
                      </div>
                      <nav aria-label class="float-right">
                        <ul class="pagination">
                          <li class="page-item disabled">
                            <a
                              class="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >Previous</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">1</a>
                          </li>
                          <li class="page-item active" aria-current="page">
                            <a class="page-link" href="#">
                              2
                              <span class="sr-only">(current)</span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">3</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</template>

<script>
export default {
  name: "Catagory",
  data: function () {
    return {
      lstColumn: [
        {
          name: "ID",
        },
        {
          name: "Category Name",
        },
        {
          name: "Slug",
        },
        {
          name: "Parent",
        },
      ],
      colSpan: 4,
      data: [
        {
          id: 1,
          name: "Category Name 1",
          slug: "/",
          parent: "0",
        },
        {
          id: 2,
          name: "Category Name 2",
          slug: "/",
          parent: "0",
        },
        {
          id: 3,
          name: "Category Name 3",
          slug: "/",
          parent: "0",
        },
        {
          id: 4,
          name: "Category Name 4",
          slug: "/",
          parent: "0",
        },
        {
          id: 5,
          name: "Category Name 5",
          slug: "/",
          parent: "0",
        },
        {
          id: 6,
          name: "Category Name 6",
          slug: "/",
          parent: "0",
        },
        {
          id: 7,
          name: "Category Name 7",
          slug: "/",
          parent: "0",
        },
        {
          id: 8,
          name: "Category Name 8",
          slug: "/",
          parent: "0",
        },
        {
          id: 9,
          name: "Category Name 9",
          slug: "/",
          parent: "0",
        },
        {
          id: 10,
          name: "Category Name 10",
          slug: "/",
          parent: "0",
        },
        {
          id: 11,
          name: "Category Name 11",
          slug: "/",
          parent: "0",
        },
      ],
      pagingPage: [],
      selectPge: 5,
      tatolPage: 0,
    };
  },
  components: {},
  created() {
    var all = Math.ceil(this.data.length / 5);
    this.tatolPage = this.data.length;
    for (let index = 1; index <= all; index++) {
      this.pagingPage.push(5 * index);
    }
  },
  mounted() {
    // $(function () {
    //     $table.bootstrapTable({
    //         locale: 'vi-VN',
    //         showLoading: true,
    //         // data: lstCate,
    //         // url:lstCate
    //     })
    //     // $("#tblCategory").DataTable({
    //     //     "responsive": true,
    //     //     "autoWidth": true,
    //     // });
    // });
  },
};
</script>
