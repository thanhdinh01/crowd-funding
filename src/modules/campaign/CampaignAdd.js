import React, { useEffect, useMemo, useState } from "react";
import Field from "../../components/common/Field";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { Dropdown } from "../../components/dropdown";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import Button from "../../components/button/Button";
import axios from "axios";
import useOnChange from "../../hooks/useOnChange";
import { v4 } from "uuid";
import Textarea from "../../components/input/Textarea";
import ImageUpload from "../../components/image/ImageUpload";
import { toast } from "react-toastify";
Quill.register("modules/imageUploader", ImageUploader);

const listCategory = ["real estate", "film", "camera gear"];

const CampaignAdd = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      category: "",
      description: "",
      story: "",
      image: {},
      goal: "",
      raised_amount: "",
      prefilled: "",
      video: "",
      end_method: "",
      country: "",
      start_date: "",
      end_date: "",
    },
  });

  const [valueContent, setValueContent] = useState("");
  const [imageupload, setImageupload] = useState("");
  const [countries, setCountries] = useState([]);
  const [errorCountry, setErrorCountry] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { filter: filterCountry, handleChange: handleChangeCountry } =
    useOnChange();

  // custom for rich text editor
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [("link", "image")],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
      imageUploader: {
        upload: async (file) => {
          try {
            const formData = new FormData();
            formData.append("image", file);
            const res = await axios({
              method: "post",
              url: "https://api.imgbb.com/1/upload?key=e7031b2bafe2c402e972ec9453576f16",
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            return res.data.data.url;
          } catch (error) {
            console.log(error);
          }
        },
      },
    }),
    []
  );

  // fetching country
  useEffect(() => {
    async function fetchCountry() {
      try {
        if (!filterCountry) return null;
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(res.data);
        setErrorCountry("");
      } catch (error) {
        if (filterCountry !== "") {
          setErrorCountry("Not found any country!");
        }
        setCountries([]);
      }
    }
    fetchCountry();
  }, [filterCountry]);

  const handleGetSelected = (name) => {
    const value = watch(name);
    return value;
  };

  const handleClickSelected = (name, value) => {
    setValue(name, value);
  };

  const onChangeImage = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      const res = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload?key=e7031b2bafe2c402e972ec9453576f16",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data.data);
      const image = {
        normal: res.data.data.url,
        thumb: res.data.data.thumb.url,
      };
      handleClickSelected("image", image);
      setImageupload(res.data.data.url);
    } catch (error) {
      toast.error("Can not upload image to browser");
    }
  };

  const handleSubmitAddnew = async (data) => {
    console.log(data);
    try {
      await axios.post("http://localhost:4001/api/campaigns", {
        ...data,
        start_date: startDate,
        end_date: endDate,
        story: valueContent,
      });
      toast.success("Add new campaign successfully!");
    } catch (error) {
      toast.error("Add new campaign unsuccessfully");
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl py-10 px-[66px] ">
        <div className="px-[60px] w-[380px] py-[16px] bg-text4 rounded-xl bg-opacity-80 mb-10  mx-auto text-text2 text-2xl font-bold">
          Start a Campaign 🚀
        </div>
        <form action="" onSubmit={handleSubmit(handleSubmitAddnew)}>
          <div className="grid grid-cols-2 gap-11">
            <Field>
              <Label name="title">Campaign Title *</Label>
              <Input
                type="text"
                placeholder="Write a titel"
                name="title"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label name="">Write a titel</Label>
              <Dropdown>
                <Dropdown.Selected
                  placeholder={
                    handleGetSelected("category") || "Select a category"
                  }
                ></Dropdown.Selected>
                <Dropdown.List>
                  {listCategory.length > 0 &&
                    listCategory.map((item) => (
                      <Dropdown.Option
                        key={v4()}
                        onClick={() => handleClickSelected("category", item)}
                      >
                        {item}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </Field>
          </div>
          <Field className="mt-[10px] flex flex-col gap-[10px]">
            <Label name="description">Short Description *</Label>
            <Textarea
              name="description"
              placeholder="Write a short description...."
              control={control}
            ></Textarea>
          </Field>
          <Field className="mt-[25px] flex flex-col gap-[10px] text-center">
            <Label className="text-left">Story *</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={valueContent}
              onChange={setValueContent}
            />
          </Field>
          <Field className="mt-[25px] flex flex-col gap-[10px] text-center w-2/4">
            <Label className="text-left">Featured Image</Label>
            <ImageUpload
              imageupload={imageupload}
              onChange={onChangeImage}
            ></ImageUpload>
          </Field>
          <div className="mt-10 py-10 px-[45px] bg-secondary bg-opacity-80 rounded-xl flex items-center">
            <span>
              <svg
                width="32"
                height="40"
                viewBox="0 0 32 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4997 9.979H9.16634C8.66634 9.979 8.33301 10.3123 8.33301 10.8123C8.33301 11.3123 8.66634 11.6457 9.16634 11.6457H22.4997C22.9997 11.6457 23.333 11.3123 23.333 10.8123C23.333 10.3123 22.9997 9.979 22.4997 9.979Z"
                  fill="white"
                />
                <path
                  d="M8.4999 7.81266C8.4999 8.146 8.83324 8.31266 9.16657 8.31266H22.4999C22.8332 8.31266 23.1666 8.146 23.1666 7.81266L26.4999 1.146C26.6666 0.812663 26.6666 0.479329 26.3332 0.145996C26.1666 -0.0206706 25.8332 -0.0206706 25.4999 0.145996L19.3332 3.146L16.4999 0.312663C16.1666 -0.0206706 15.6666 -0.0206706 15.3332 0.312663L12.3332 3.146L6.16657 0.145996C5.83324 -0.0206706 5.4999 -0.0206706 5.16657 0.145996C4.83324 0.312663 4.9999 0.812663 5.16657 1.146L8.4999 7.81266Z"
                  fill="white"
                />
                <path
                  d="M23.1667 13.6456C23 13.4789 22.6667 13.3123 22.5 13.3123H9.16667C9 13.3123 8.66667 13.4789 8.5 13.6456C8.16667 13.9789 0 22.6456 0 27.4789C0 34.3123 7.16667 39.9789 15.8333 39.9789C24.5 39.9789 31.6667 34.3123 31.6667 27.4789C31.6667 22.6456 23.5 13.9789 23.1667 13.6456ZM16.6667 33.3123V34.1456C16.6667 34.6456 16.3333 34.9789 15.8333 34.9789C15.3333 34.9789 15 34.6456 15 34.1456V33.3123C13.1667 32.9789 11.8333 31.8123 11.6667 30.3123C11.6667 29.8123 12 29.4789 12.5 29.4789C13 29.4789 13.3333 29.8123 13.3333 30.3123C13.3333 30.9789 14.1667 31.6456 15 31.8123V28.4789C12.8333 27.9789 11.6667 26.8123 11.6667 25.3123C11.6667 23.6456 13.1667 22.3123 15 21.9789V21.1456C15 20.6456 15.3333 20.3123 15.8333 20.3123C16.3333 20.3123 16.6667 20.6456 16.6667 21.1456V21.6456C18.5 21.9789 19.8333 23.1456 20 24.6456C20 25.1456 19.6667 25.4789 19.1667 25.4789C18.6667 25.4789 18.3333 25.1456 18.3333 24.6456C18.3333 23.9789 17.5 23.3123 16.6667 23.1456V26.4789C18.8333 26.9789 20 28.1456 20 29.6456C20 31.6456 18.5 32.9789 16.6667 33.3123Z"
                  fill="white"
                />
                <path
                  d="M16.667 28.4785V31.4785C17.667 31.3119 18.3337 30.6452 18.3337 29.9785C18.3337 29.3119 17.8337 28.8118 16.667 28.4785Z"
                  fill="white"
                />
                <path
                  d="M13.333 24.9788C13.333 25.6454 13.833 26.1454 14.9997 26.4788V23.4788C13.9997 23.6454 13.333 24.3121 13.333 24.9788Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="text-white text-[25px] font-bold ml-5">
              You will get 90% of total raised
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-[45px] gap-y-[25px] mt-10">
            <Field>
              <Label name="goal">Goal *</Label>
              <Input
                type="text"
                control={control}
                placeholder="$0.00 USD"
                name="goal"
              ></Input>
            </Field>
            <Field>
              <Label name="raised_amount">Raised Amount *</Label>
              <Input
                type="text"
                control={control}
                placeholder="$0.00 USD"
                name="raised_amount"
              ></Input>
            </Field>
            <Field>
              <Label name="prefilled">Amount Prefilled</Label>
              <Input
                type="text"
                control={control}
                placeholder="Amount Prefilled"
                name="prefilled"
              ></Input>
              <p className="text-text3 text-sm font-normal">
                It will help fill amount box by click, place each amount by
                comma, ex:{" "}
                <span className="text-base font-medium">10,20,30,40</span>
              </p>
            </Field>
            <Field>
              <Label name="video">Video</Label>
              <Input
                type="text"
                control={control}
                placeholder="Video"
                name="video"
              ></Input>
              <p className="text-text3 text-sm font-normal">
                Place Youtube or Vimeo Video URL
              </p>
            </Field>
            <Field>
              <Label name="">Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Selected
                  placeholder={handleGetSelected("end_method") || "Select one"}
                ></Dropdown.Selected>
                <Dropdown.List>
                  {listCategory.length > 0 &&
                    listCategory.map((item) => (
                      <Dropdown.Option
                        key={v4()}
                        onClick={() => handleClickSelected("end_method", item)}
                      >
                        {item}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </Field>
            <Field>
              <Label name="">Counrty</Label>
              <Dropdown>
                <Dropdown.Selected
                  placeholder={
                    handleGetSelected("country") || "Select a country"
                  }
                ></Dropdown.Selected>
                <Dropdown.List>
                  <Dropdown.Search
                    error={errorCountry}
                    placeholder="Search a country..."
                    onChange={handleChangeCountry}
                  ></Dropdown.Search>
                  {countries.length > 0 &&
                    countries.map((country) => (
                      <Dropdown.Option
                        key={country.name.common}
                        onClick={() =>
                          handleClickSelected("country", country?.name?.common)
                        }
                      >
                        {country?.name?.common}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </Field>
            <Field>
              <Label name="start_date">Start Date</Label>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                format="dd/MM/yyyy"
                minDate={new Date()}
              />
            </Field>
            <Field>
              <Label name="end_date">End Date</Label>
              <DatePicker
                onChange={setEndDate}
                value={endDate}
                format="dd/MM/yyyy"
              />
            </Field>
          </div>
          <div className="text-center">
            <Button
              type="submit"
              kind="primary"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className="mt-10 px-[39px] mx-auto min-w-[254px]"
            >
              Submit new campaign
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CampaignAdd;
